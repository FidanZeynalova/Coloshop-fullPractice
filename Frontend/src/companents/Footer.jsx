import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa6'

function Footer() {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="left">
                    <ul>
                        <li>Blog</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                    <span>©2018 All Rights Reserverd. This template is made with ❤ by Colorlib</span>
                </div>
                <div className="right">
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaTelegram />
                </div>
            </div>
        </div>
    )
}

export default Footer
