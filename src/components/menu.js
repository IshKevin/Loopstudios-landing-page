import React from 'react'


function Menu(close,nav) {
console.log(close,nav);
    return (
    <div className='humbemenu'>
        <div className="logo">
        {/* <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/></g></svg> */}
        <div className="openMenu"><i onClick={()=>close(false)} className="fa fa-bars"></i></div>
        </div>
        <div className='links'>
        <a href={'#'}>About</a>
        <a href='#'>Careers</a>
        <a href='#'>Events</a>
        <a href='#'>Products</a>
        <a href='#'>Support</a>
        </div>
    </div>
  )
}

export default Menu