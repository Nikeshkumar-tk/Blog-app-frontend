import './Settings.css'
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from 'react';
import {  getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from '../../Components/Firebase'
import { useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';



const Settings = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [file,setFile]=useState(null)
  const {user,dispatch}=useContext(Context)
  const [imgUrl,setImgUrl]=useState("")
  const [oldUsername,setOldUsername]=useState("")
  const updateData=async(imgData)=>{
    try{
console.log(typeof(imgData))

      const res=await axios.put("/users/"+user._id,{
        userId:user._id,
        username:name,
        email:email,
        password:password,
        profilePic:imgData,
      })
      console.log(res)
      setImgUrl(res.data.profilePic)
      const res1=await updateUserName()
      console.log(res1)
      
     res&&dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    }catch(err){
      dispatch({ type: "UPDATE_FAILURE" });
console.log(err)
    }
  }
  const updateUserName=async()=>{
await axios.put("/posts",{
  oldUsername:oldUsername,
  newUsername:name
})
  }


  const handleSubmit=async(e)=>{
    e.preventDefault()
    dispatch({ type: "UPDATE_START" });
    
    const fileName=`${Date.now()}${file.name}`
    const storageRef = ref(storage, fileName);
    console.log(fileName)
   
    
   await uploadBytes(storageRef, file).then((snapshot) => {
      console.log(snapshot); })
      
      
     await getDownloadURL(ref(storage,fileName)).then((imgAdd)=>{
        console.log(imgAdd)
       
        console.log(imgUrl)
        updateData(imgAdd)

        
      })

    }
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update your account</span>
          <span className="settingsTitleDelete">Delete your account</span>
        </div>
        <form  className="settingsForm" onSubmit={handleSubmit}>
          <label>profile picture</label>
          <div className="settingsPP">
            <img src={user.profilePic} alt="" />
            <label htmlFor="fileInput">
            <i class="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" style={{display:"none"}} id="fileInput" onChange={(e)=>setFile(e.target.files[0])}/>
          </div>
          <label >USERNAME</label>
          <input type="text" placeholder={user.username} onChange={(e)=>{setOldUsername(user.username);setName(e.target.value)}}/>
          <label >EMAIL</label>
          <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>
          <label >PASSWORD</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} />
          <button className="settingsSubmitButton" type='submit'>update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings