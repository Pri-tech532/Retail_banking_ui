import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsBellFill} from 'react-icons/bs'
function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>

            <BsJustify classname='icon'onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
                <BsSearch classname='icon'/> 
        </div>

        <div className='header-right'>
            <BsBellFill classname='icon'/>
            <BsFillEnvelopeFill classname='icon'/>
            <BsPersonCircle classname='icon'/>
        </div>
    </header>
  )
}

export default Header