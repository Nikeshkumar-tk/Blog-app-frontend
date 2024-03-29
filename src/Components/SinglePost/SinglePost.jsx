import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SinglePost.css'
import axios from 'axios'
import { Context } from '../../context/Context';
import Button from '@mui/material/Button';

const SinglePost = () => {
  const location=useLocation()
  const path=location.pathname.split("/")[2]

  const [fetchedPost,setfetchedPost]=useState({})
const {user}=useContext(Context)
const [title,setTitle]=useState("")
const [updateMode,setUpdateMode]=useState(false)
const PF = "http://localhost:5000/images/";

const [desc,setDesc]=useState("")
const [audioLoading,setAudioLoading]=useState(false)
const [audioUrl,setAudioUrl]=useState("")
  
  useEffect(()=>{
    const getPost=async()=>{
      const res=await axios.get("/posts/"+path)
      console.log(res)
     
      setfetchedPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
     
      
    }
    getPost();
  },[path])
  const handleDelete=async()=>{
try{
await axios.delete("/posts/"+path,{data:{username:user.username}})
window.location.replace("/")
}catch(err){
  console.log(err)

}

}
const handleUpdate=async()=>{
  try{

    const res=await axios.put(`/posts/${fetchedPost._id}`,{username:user.username,title:title,desc:desc})
    console.log(res)
  }catch(err){
    console.log(err)
  }
  window.location.reload()

}
const loadAudio=async()=>{
  let encodedParams=new URLSearchParams()
  encodedParams.append("voice_code", "en-US-1");
  encodedParams.append("text", desc);

await axios({
  method:'POST',
  url: 'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize',
data:encodedParams,
headers: {
  'content-type': 'application/x-www-form-urlencoded',
  'X-RapidAPI-Key': '39917aa29amshb5bebf0758c9345p197919jsn308218859cd1',
  'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
}
}).then((res)=>{
  console.log(res)
  setAudioUrl(res.data.result.audio_url)
  setAudioLoading(true)
})
}
  
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={fetchedPost.photo} alt="" className='singlePostImg' />
            {updateMode?<input type="text" value={title} className="singlePostTitleInput" onChange={(e)=>setTitle(e.target.value)} autoFocus></input>:(


              
              <h1 className='singlePostTitle'>{fetchedPost.title}
            {fetchedPost.username===user?.username&&(
              
              
              <div className="singlePostEdit">
                <i class="singlePostIcon fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
                <i class="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                
                </div>
            )}
            </h1>
                  )}
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                  <Link to={`/?user=${fetchedPost.username}`} className="link">
                  
                  <b>{fetchedPost.username}</b>
                  </Link>
                  </span>
                 <Button variant="contained" color="success" onClick={loadAudio}>
                            Play audio
                    </Button>
                <span className="singlePostDate"><b>{new Date(fetchedPost.createdAt).toDateString()}</b></span>
            </div>
            {updateMode?<textarea className='singlePostDescInput' value={desc} onChange={(e)=>setDesc(e.target.value)}/>:(
            <div>{audioLoading&&<audio controls>
              <source src={audioUrl}></source></audio>}
              <p>{fetchedPost.desc}

            </p></div>
            )}{updateMode&&
            <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            }
        </div>
    </div>
  )
}

export default SinglePost