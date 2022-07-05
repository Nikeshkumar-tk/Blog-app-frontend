import './SinglePost.css'

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="siglePostWrapper">
            <img src="https://www.pixelstalk.net/wp-content/uploads/2016/06/High-Tech-Background-HD.jpg" alt="" className='singlePostImg' />
            
            <h1 className='singlePostTitle'>Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i class="singlePostIcon fa-solid fa-trash"></i>
                
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor"><b>NIKESH</b></span>
                <span className="singlePostdATE"><b>5 HOUR AGO</b></span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt consequuntur id quia error nihil nam ex unde beatae eaque enim consequatur, rerum, eum, asperiores debitis fugiat minus praesentium laboriosam aperiam? Facilis, temporibus reiciendis minus nisi fugiat iusto id perspiciatis placeat optio magni, aperiam asperiores perferendis consectetur, suscipit quasi cupiditate earum ex tempora quidem illo ut necessitatibus aspernatur. Quo earum expedita illo, nostrum necessitatibus facere quia blanditiis cumque nihil aspernatur, architecto veritatis omnis harum! Placeat tempore repellat dolorem quia neque maxime quos totam necessitatibus consectetur vero incidunt odio voluptatem provident repudiandae sunt, officia soluta molestias temporibus fugiat nobis maiores modi quasi dolor. Ad hic quasi consequatur magni, aliquam itaque eum dolorem perspiciatis minima accusantium porro nisi magnam! Sint consequatur ipsum blanditiis! Totam qui nulla fugit quis sapiente labore voluptas error facilis ducimus, explicabo repudiandae, ratione voluptatum modi veniam consequuntur odio ipsum velit! Neque fugit voluptatem enim totam quibusdam fuga provident explicabo.

            </p>
           
        </div>
    </div>
  )
}

export default SinglePost