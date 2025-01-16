import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex item-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
     <Navbar/>
     <div>
       <h2>Unlock the doors to your dreams</h2> 
      </div>
    </div>
  )
}

export default Header
