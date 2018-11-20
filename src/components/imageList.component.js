import React from 'react'


export const ImageListComponent = props => 
    (<div>
        {props.images.map(image => <img src={image} className={image === props.selectedImage ? 'selectedImage' : ''} onClick={props.onClick} />)}
    </div>)

