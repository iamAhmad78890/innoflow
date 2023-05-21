import React from 'react'
import "./header.css"
const Header = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='container mt-4'>
                    <div className='nav-bar'>
                        <div className='nav-logo'>
                            <img src="./images/iNN0FLOW.png" alt="" />
                        </div>
                        <div className='nav-links'>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">The Problem</a></li>
                                <li><a href="#">The Specification</a></li>
                                <li><a href="#">Specification</a></li>
                            </ul>

                        </div>
                        <div className='nav-btn'>
                            <button>Contact us</button>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Header
