import React from 'react'
import { BsEye, BsThreeDotsVertical } from 'react-icons/bs'

function Home() {

  return (
    <main className='main-container'>
      <div className='main-title' >
        <h3  >Dashboard</h3>
        </div>

        <div className='main-cards'>

          <div className='card'>
          <div className='card-inner'>
            <h3>Current Balance</h3>
            <BsEye className='card_icon' title="click to show" />
          </div>
          <h3>Amount</h3>
          </div>



          <div className='card'>
          <div className='card-inner'>
            <h3>Random Yaajana1</h3>
            <BsThreeDotsVertical className='card_icon'/>
          </div>
          <button className='button1'>Know More</button>
          </div>

          <div className='card'>
          <div className='card-inner'>
            <h3>Random Yaajana3</h3>
            <BsThreeDotsVertical className='card_icon'/>
          </div>
          <button className='button1'>Know More</button>
          </div>


          <div className='card'>
          <div className='card-inner'>
            <h3>Random Yaajana4</h3>
            <BsThreeDotsVertical className='card_icon'/>
          </div>
          <button className='button1'>Know More</button>
          </div>



        </div>


    </main>
    
  )
}

export default Home