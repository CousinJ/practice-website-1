import React from 'react'

function LargeImage(props) {
    return(<div style={{backgroundImage: `url(${props.imageUrl})`}} className='large-image-container'>
        

    </div>)
}

export default LargeImage;