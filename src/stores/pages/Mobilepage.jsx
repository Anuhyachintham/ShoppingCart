import React from 'react'
import { mobileData } from '../data/mobiles'

const Mobilepage = () => {
  return (
    <div>
        <div>
            {mobileData.map((item)=>{
                return(<div>
<img src={item.image} alt=""/>
                </div>)
            })}
        </div>
       
        </div>
  )
}

export default Mobilepage