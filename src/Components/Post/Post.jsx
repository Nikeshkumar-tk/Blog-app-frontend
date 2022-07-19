import './Post.css'
import {Link} from 'react-router-dom'

const Post = ({post}) => {
  return (
    <div className='post'>
      {post.photo&&(
      
        <img src={post.photo} alt="" className="postImg" />
     ) }
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map((c)=>(
                <span className="postCat">{c.name}</span>
              ))}
                
               
            </div>
            <Link to={`/posts/${post._id}`} className="link">

            <span className="postTitle">{post.title}</span><hr />
            </Link>
            <span className="postDate">
               {new Date(post.createdAt).toDateString()}
            </span>
        </div>
        <p className="postDesc">{post.desc}</p>
    </div>
  )
}

export default Post