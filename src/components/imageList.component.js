import React from 'react'


export const ImageListComponent = props=>{
    return <img src={props.url} className={props.url === props.selectedUrl?'selectedImage':''} onClick={props.onClick}/>
}