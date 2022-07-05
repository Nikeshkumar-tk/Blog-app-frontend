import './Home.css'
import Header from '../Header/Header'
import  Sidebar  from '../Sidebar/Sidebar';
import Posts from '../Posts/Posts';

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