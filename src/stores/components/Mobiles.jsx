import React from 'react'
import {mobileData} from "../data/mobiles"
const Mobiles = () => {
    let firstFiveImages=mobileData.slice(0,5)
  return (
  
    <div className='container'>
    {firstFiveImages.map((item)=>{return <div className='image-box' key={item.id}>
        <div>
            <img src={item.image} alt=""/>
        </div>
    </div>})}


    </div>
  )
}

export default Mobiles;