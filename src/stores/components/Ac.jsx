import React from 'react'

import { acData } from '../data/ac'
const Ac = () => {
let firstFiveImages=acData.slice(0,5)

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

export default Ac