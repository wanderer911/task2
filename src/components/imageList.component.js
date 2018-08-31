import React from 'react'


export const ImageListComponent = props=>(
    props.images.map(image=>{
        <img src={image} className={image === props.selectedImage?'selectedImage':''} onClick={props.onClick}/>
    })
)