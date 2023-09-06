import React from 'react'
import {BsPersonSquare,BsClipboard,BsCash,BsWrenchAdjustableCircle,BsCurrencyRupee,BsCreditCard,BsClockHistory,BsCashCoin, BsCashStack}  from 'react-icons/bs'




function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          {/* <BsPersonSquare className='icon_header' title="Passbook" /> */}
           Account Summary 
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>x</span>
      </div>

      <ul className='sidebar-list'>

      <li className='sidebar-list-item'>
          <a href="" > <BsClipboard className='icon'/>Dashboard </a>

        </li>


        <li className='sidebar-list-item'>
          <a href="" > <BsPersonSquare className='icon'/>Account Info </a>

        </li>

        <li className='sidebar-list-item'>
          <a href="" > <BsCashCoin className='icon'/>Deposits </a>

        </li>

        <li className='sidebar-list-item'>
          <a href="" > <BsCreditCard className='icon'/> Manage Cards</a>

        </li>

        <li className='sidebar-list-item'>
          <a href="" > <BsCurrencyRupee className='icon'/> UPI</a>

        </li>


        <li className='sidebar-list-item'>
          <a href="" > <BsCashStack className='icon'/>Transfer  </a>

        </li>

        <li className='sidebar-list-item'>
          <a href="" > <BsClockHistory className='icon'/>Transaction History </a>

        </li>

        <li className='sidebar-list-item'>
          <a href="" > <BsCash className='icon'/>FD/RD </a>

        </li>



        <li className='sidebar-list-item'>
          <a href="" > <BsWrenchAdjustableCircle className='icon'/>Settings </a>

        </li>



      </ul>
    </aside>
  )
}

export default Sidebar