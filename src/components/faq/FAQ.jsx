import React, {useState} from 'react'

const FAQ = ({faq}) => {

    const[isToggled, setIsToggled]=useState(false);
    const{title, description}=faq;
    
  return (
    <div className='questions'>
       <div className='content'>
            <h3>{title}</h3>
            <button onClick={()=>{setIsToggled(!isToggled)}} className="btn">
                {isToggled?"-":"+"}
            </button>
       </div>
    {isToggled&&<p> {description} </p>}
    </div>
  )
}

export default FAQ