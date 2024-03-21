import React from 'react'

const Navbar = () => {
  return (
<>
    <div className='proSection'>
        <h2 className='prohead'>E-Mart</h2>
        <div className='search'>
            <input type="text" placeholder='search'/>
        </div>
        <div>
            <h1>signIn/signUP</h1> 
            <h2>cart</h2>

        </div>
        
       </div>
       <div className='subMenu'>
<ul>
  <li>Mobiles</li>
  <li>Computers</li>
  <li>Watches</li>
  <li>Mens</li>
  <li>Womens</li>
  <li>furniture</li>
  <li>Ac</li>
  <li>Kitchen</li>
  <li>Book</li>
  <li>Fridge</li>
  <li>Speakers</li>
  <li>Tv</li>
  <li>Watches</li>
  <li>Womens</li>
</ul>
       </div>
       </>
  )
}

export default Navbar