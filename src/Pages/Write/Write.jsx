import { useState } from 'react'
import { storage } from '../../Components/Firebase'
import './Write.css'
import {  getDownloadURL, ref, uploadBytes } from "firebase/storage"
import axios from "axios"
import { useContext } from 'react'
import { Context } from '../../context/Context';


const Write = () => {
  const {user}=useContext(Context)
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const [file,setFile]=useState(null)
  const [url,setUrl]=useState("")
  const [categories,setCategories]=useState("")
//   const sendData=async(imgurl)=>{
//     console.log(categories)
//     try{
        

//       const res=await axios.post("/posts", {
//        username:user.username,
//        title,
//        desc,
//        photo:imgurl,
//        categories:categories
//      })
//     res&& window.location.replace("/posts/" + res.data._id);
    
//      }catch(err){
// console.log(err)
//      }}
const sendData=async(e)=>{
  e.preventDefault()
  console.log(categories)
  try{
      

    const res=await axios.post("/posts", {
     username:user.username,
     title,
     desc,
     photo:url,
     categories:categories
   })
  res&& window.location.replace("/posts/" + res.data._id);
  
   }catch(err){
console.log(err)
   }}


   
  //    const handleSubmit=async(e)=>{
  //     e.preventDefault()
  //     console.log(user)
    
      
  //     const fileName=Date.now() + file.name
  //     const storageRef = ref(storage, fileName );
     
      
  //    await uploadBytes(storageRef, file).then((snapshot) => {
  //       console.log(snapshot); })
        
        
  //      await getDownloadURL(ref(storage,fileName)).then((imgAdd)=>{
  //         console.log(imgAdd)
  // sendData(imgAdd)
          
  //       })}
        const uploadImg=async(inputfile)=>{
          
          console.log(user)
        
          
          const fileName=Date.now() + inputfile.name
          const storageRef = ref(storage, fileName );
         
          
         await uploadBytes(storageRef, inputfile).then((snapshot) => {
            console.log(snapshot); })
            
            
           await getDownloadURL(ref(storage,fileName)).then((imgAdd)=>{
              console.log(imgAdd)
              setUrl(imgAdd)
      
              
            })
        // const newPost = {
        //   username: user.username,
        //   title,
        //   desc,
        // };
        // if (file) {
        //   const data =new FormData();
        //   const filename = Date.now() + file.name;
        //   data.append("name", filename);
        //   data.append("file", file);
        //   newPost.photo = filename;
        //   try {
        //     await axios.post("/upload", data);
        //   } catch (err) {}
        // }
        // try {
        //   const res = await axios.post("/posts", newPost);
        //   window.location.replace("/posts/" + res.data._id);
        // } catch (err) {
        //   console.log(err)
        // }
 
      }
  
//  const loadImg=()=>{
//   const reader=new FileReader()
//   reader.readAsDataURL(file)
//   reader.onload=()=>{
//     setUrl(reader.result)
//   }
//  }
     
    
    
    
  
  return (
    <div>
     
    <div className='write'>
       
        {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
       
        <form className="writeForm" onSubmit={sendData}>
       
            <div className="writeFormGroup"><label htmlFor="fileInput"><i class="writeIcon fa-solid fa-circle-plus"></i></label>
                <input type="file" id='fileInput' style={{display:"none"}} onChange={(e)=>{setFile(e.target.files[0]);uploadImg(e.target.files[0])}} />
                <input type="text" placeholder='title' className='writeInput' autoFocus={true} onChange={(e)=>setTitle(e.target.value)}/>
                <select className="select form-select  position-absolute left-3" aria-label="Default select example" onChange={(e)=>setCategories(e.target.value)}>
  <option selected>Select Categories</option>
  <option value="start ups">start up</option>
  <option value="programming">Programming</option>
  <option value="web development">Web development</option>
  <option value="app development">App development</option>
  <option value="devops">Devops</option>
</select>
                
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Enter the content' type='text' className='writeInput writeText' onChange={(e)=>setDesc(e.target.value)}></textarea>
              
            </div>
            
            <button className="writeSubmit" type='submit'>Publish</button>
        </form>
       
    </div></div>
  )
}

export default Write