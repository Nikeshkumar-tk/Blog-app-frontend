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
      src="https://newevolutiondesigns.com/images/freebies/tech-wallpaper-8.jpg"
      alt=""
    />
  </div>
  )
}
export default Header;