import React from 'react'


export default function Card({item}) {
  return (
    <div className='card'>
        <img src={item.img} alt=''/>
    </div>
  )
}
