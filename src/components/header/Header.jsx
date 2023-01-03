import React from 'react'
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import "./header.css";



const Header = ({order,handleShow}) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [navBar, setNavbar]=useState(false)

    const handleChange=()=>{
      if(window.scrollY>=80){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }
    
    useEffect(() => {
      handleChange()
      window.addEventListener("scroll", handleChange)
    })

  const totalQuantity = order.reduce((sum, el)=> sum +el.quantity, 0);
    
  return (
    <header className={navBar?"navbar scroll":"navbar "}>
          <div className="inner">
              <div className="box">
                    <Link to="/" >ONLINE BOOKSTORE</Link>                  
              </div>
              <div className="box">
                <nav>
                    <ul className={click ? "nav-menu active" : "nav-menu"}  onClick={handleClick}>
                        <li>
                            <Link to="/" className="nav-links" >Home</Link>
                        </li>
                        <li>
                            <Link to="/authors" className="nav-links" >Authors</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-links" >About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-links" >Contact</Link>
                        </li>
                    </ul>
                </nav>
              </div>
              <div className="box">
                    <div className="buttons">
                            <i className="fa-solid fa-cart-shopping" onClick={handleShow}></i>
                            <span className="totalQuantity">{totalQuantity}</span>
                    </div>
              </div>
              <div className="nav-icon " onClick={handleClick}>
              {click ? (<i className="fa-solid fa-circle-xmark" ></i>):
              (<i className="fa-solid fa-bars-staggered"></i>)}
            </div>
          </div>
    </header>
  )
}

export default Header
