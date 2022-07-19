import './Header.css'

 const Header = () => {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">React & Node</span>
      <span className="headerTitleLg">TECH BLOG</span>
    </div>
    <img
      className="headerImg"
      src="https://i.pinimg.com/564x/7d/eb/74/7deb74172032e24dc1f0af56be233dc5.jpg"
      alt=""
    />
  </div>
  )
}
export default Header;