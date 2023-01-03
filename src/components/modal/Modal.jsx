import React from 'react';
import { useState } from 'react';
import "./modal.css";
console.log(useState)



const Modal = ({bookData, setOpenModal,item}) => {

    const {image_url,title,description,authors,genres}=bookData;
    const [readMore, setReadMore]=useState(false);

    return (
        <div className='modal'>
            <div className="inner">
                <i  onClick={()=>setOpenModal(false)}  className="fa-solid fa-xmark"></i>
                <div className="image">
                    <img src={image_url} alt={title}/>    
                </div> 
                <div className="content">
                    <h2 className="title">{title}</h2>
                    <h2> {authors}</h2>
                    <p>{genres}</p>
                    <p className='description'>
                        {readMore ? description :`${description.substring(0,400)}...`}
                        <button onClick={()=>setReadMore(!readMore)}>
                            {readMore?"Show Less":"Read More"}
                        </button>
                    </p>    
                </div>  
            </div>
        </div>
  )
}

export default Modal