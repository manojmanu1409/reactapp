import React from 'react'
import './css/header.css'
const Header = () => {
   
    function click(name){
    console.log(name)
}
  return (
    <div>
        <p className='para'>siet</p>
        <button  onClick={() => click('manoj')}>click me </button>
        </div>
        
  )
}

export default Header