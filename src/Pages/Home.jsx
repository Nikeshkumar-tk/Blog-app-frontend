import './Home.css'
import Header from '../Components/Header/Header'
import  Sidebar  from '../Components/Sidebar/Sidebar';
import Posts from '../Components/Posts/Posts';

 const Home = () => {
  return (<>
       <Header />
    <div className='home'>
     
      <Posts />
      <Sidebar />
    </div></>
  )
}
export default Home;