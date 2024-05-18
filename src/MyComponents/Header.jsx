import React from "react";
import '../app.css' 
import tShirt from '../assets/tshirt.png'
function Header(props){
    return(
        <>
        <nav className="navigation-bar">
        <div className="logo">T<img src={tShirt} alt="" />Shirts</div>
        <ul className="menu">
            <li><a href="">Home</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Cart</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Hello <span style={{color:'whitesmoke'}}>{props.user}</span></a></li>
        </ul>
        </nav>
        </>
    );
}
export default Header;