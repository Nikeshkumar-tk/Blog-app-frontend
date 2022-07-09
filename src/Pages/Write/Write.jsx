import './Write.css'

const Write = () => {
  return (
    <div className='write'>
        <img src="https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg" alt="cannot load" className="writeImg" />
        <form className="writeForm">
            <div className="writeFormGroup"><label htmlFor="fileInput"><i class="writeIcon fa-solid fa-circle-plus"></i></label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
                <input type="text" placeholder='title' className='writeInput' autoFocus={true}/>

            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Enter the content' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write