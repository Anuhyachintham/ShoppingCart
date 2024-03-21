import React from 'react'
import {kitchenData} from "../data/kitchen"
const Kitchen = () => {

    let firstFiveImages=kitchenData.slice(0,5)
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

export default Kitchen