import React from 'react'

import {speakerData} from "../data/speaker"
const Speakers = () => {

  let firstFiveImages=speakerData.slice(0,5)

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

export default Speakers