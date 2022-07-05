import './Post.css'

const Post = () => {
  return (
    <div className='post'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQctvNOirbv22kM8mbwy_VfLiTihb41pzxA&usqp=CAU" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ut.</span><hr />
            <span className="postDate">
                1hr ago
            </span>
        </div>
    </div>
  )
}

export default Post