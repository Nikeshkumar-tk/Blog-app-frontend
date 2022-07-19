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
  const updateData=async(imgAdd)=>{
    try{


      const res=await axios.put("/users/"+user._id,{
        userId:user._id,
        username:name,
        email:email,
        password:password,
        profilePic:imgAdd
      })
      
     res&&dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    }catch(err){
console.log(err)
    }
  }


  const handleUpdate=async(e)=>{
    e.preventDefault()
    console.log("test")
    const fileName=Date.now()+file.name
    const storageRef = ref(storage,fileName );
   await uploadBytes(storageRef, file).then((snapshot) => {
      console.log(snapshot); }).catch((err)=>console.log(err))
      
      
     await getDownloadURL(ref(storage,fileName)).then((imgAdd)=>{
      console.log(imgAdd)
        updateData(imgAdd)
         
      }).catch((err)=>console.log(err))
  }
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update your account</span>
          <span className="settingsTitleDelete">Delete your account</span>
        </div>
        <form  className="settingsForm" onSubmit={handleUpdate}>
          <label>profile picture</label>
          <div className="settingsPP">
            <img src={user.profilePic} alt="" />
            <label htmlFor="fileInput">
            <i class="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" style={{display:"none"}} id="fileInput" onChange={(e)=>setFile(e.target.value)}/>
          </div>
          <label >USERNAME</label>
          <input type="text" placeholder={user.username} onChange={(e)=>setName(e.target.value)}/>
          <label >EMAIL</label>
          <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>
          <label >PASSWORD</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <button className="settingsSubmitButton" type='submit'>update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings