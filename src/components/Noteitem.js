import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3 my-3'>
            <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illum molestiae, repudiandae nihil porro itaque perferendis, deserunt distinctio nesciunt unde possimus vero rerum cum accusamus similique facere maxime totam tempore perspiciatis tenetur nulla quaerat.</p>
                    </div>
            </div>
        </div>
    )
}

export default Noteitem
