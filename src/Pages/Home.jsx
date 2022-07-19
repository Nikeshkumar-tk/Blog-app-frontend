import './Home.css'
import Header from '../Components/Header/Header'
import  Sidebar  from '../Components/Sidebar/Sidebar';
import Posts from '../Components/Posts/Posts';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
import { useLocation } from 'react-router-dom';

 const Home = () => {
  const [posts,setPosts]=useState([])
  const {search}=useLocation()
  useEffect(()=>{
    const fetchPost=()=>{
      axios.get("/posts"+search).then((res)=>{
       setPosts(res.data)
      })

    }

    fetchPost()
  },[search])
  return (<>
       <Header />
    <div className='home'>
     
      <Posts posts={posts}/>
      <Sidebar />
    </div></>
  )
}
export default Home;