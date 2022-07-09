import './Settings.css'
import Sidebar from "../../Components/Sidebar/Sidebar";


const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update your account</span>
          <span className="settingsTitleDelete">Delete your account</span>
        </div>
        <form  className="settingsForm">
          <label>profile picture</label>
          <div className="settingsPP">
            <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <label htmlFor="fileInput">
            <i class="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" style={{display:"none"}} id="fileInput"/>
          </div>
          <label >USERNAME</label>
          <input type="text" placeholder='name'/>
          <label >EMAIL</label>
          <input type="email" placeholder='example@gmail.com'/>
          <label >PASSWORD</label>
          <input type="password"/>
          <button className="settingsSubmitButton">update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings