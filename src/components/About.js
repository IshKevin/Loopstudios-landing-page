import React from 'react'

const about = () => {
  return (
    <div className='about'>
      <div className='sect1'>
  <div className='sect1-a'>
    <img src={"image-interactive.jpg"} alt=''/>
  </div>
  <div className='sect1-b'>
    <h3> THE LEADER IN <br/>INTERACTIVE VR</h3>
    <p>Founded in 2011, loopstudio has been producing world-class<br/> 
    virtully rearty projects for some of best companies around the <br/> 
    globe our award winning creations have transformed <br/>
    bussiness through digital experience that bind on their brinde 
    </p>
  </div>
</div>

        <div className='sect2'>
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
  )
}

export default about