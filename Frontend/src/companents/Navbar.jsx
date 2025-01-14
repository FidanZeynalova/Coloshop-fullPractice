import React from 'react'
import { FaBars, FaCartShopping } from "react-icons/fa6";
import {NavLink} from "react-router"
function Navbar() {
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="logo">
                    <span>Colo</span><span style={{ color: "#ff4853" }}>Shop </span>
                </div>
                <div className="list">
                    <ul>
                        <li><NavLink to={"/"} style={{color:"#ff4853"}}>Home</NavLink></li>
                        <li><NavLink to={"/add"} style={{color:"black"}}>Add</NavLink></li>
                        <li>Promation</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <div className="icons">
                        <div className="icon">
                            <FaBars />
                        </div>
                        <div className="basket" style={{ position: "relative", zIndex: "2" }}>
                           <p> <NavLink to={"/basket"} style={{color:"black"}}><FaCartShopping /></NavLink> </p><span style={{ backgroundColor: "#ff4853", fontSize: "17px", position: 'absolute', padding: "3px 2px", borderRadius: "50%", bottom: "60%", left: "60%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>0</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
