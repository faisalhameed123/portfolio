import React from 'react';
import { Link } from 'react-router-dom';
import ham from "../images/ham.png";
import hamclo from "../images/hamclose.png";


const NavComponent = (props) => {
    return(
            <div className="menu">
                <input type="checkbox" id="toggle" className="toggle" />
                <label id="show-menu" for="toggle">
                    <div className="btn-1">
                        <span className="toggleBtn menuBtn"><img src={ham} alt="ham" width="45px" height="45px"></img></span>
                        <span className="toggleBtn closeBtn"><img src={hamclo} alt="hamclo" width="50px" height="50px"></img></span>
                    </div>
                    <Link className="btn-1" to="/" >Home</Link>
                    <Link className="btn-1" to="/about" >About</Link>
                    <Link className="btn-1" to="/cv" >Cv</Link>
                    <Link className="btn-1" to="/contact" >Contact</Link>
                </label> 
            </div>  
    )
}
export default NavComponent;