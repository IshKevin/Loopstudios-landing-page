import React from 'react'

const about = () => {
  return (
    <div className='about'>
        <div>
        <img src={"image-interactive.jpg"} alt=''/>
        <div>
            <h3> THE LEADER IN INTERACTIVE VR</h3>
            <p>Founded in 2011, loopstudio has been producing
                world-class virtully rearty projects for some of best companies around the 
                globe our award winning creations have transformed
                bussiness through digital experience that bind on their brinde 
            </p>
        </div>
        <div>
           <h3>our creations </h3>
           <button> see all</button> 
        </div>
        <div className='photocases'>
            <div className='photocase1'>
             <div className='imag1'></div>
             <div className='imag2'></div>
             <div className='imag3'></div>
             <div className='imag4'></div>
            </div>
            <div className='photocase2'>
            <div className='imag5'></div>
            <div className='imag6'></div>
            <div className='imag7'></div>
            <div className='imag8'></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default about