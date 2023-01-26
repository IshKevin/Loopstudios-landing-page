import React from 'react'

function menu() {
  return (
    <div className='humbemenu'>
        <nav>
            <div className="logo"><h1>Deltaty</h1></div>
            <div className="openMenu"><i className="fa fa-bars"></i></div>
            <ul className="mainMenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
                <div className="closeMenu"><i className="fa fa-times"></i></div>
                <span className="icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-github"></i>
                </span>
            </ul>
        </nav>
    </div>
  )
}

export default menu