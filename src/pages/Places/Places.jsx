import React from 'react'
import Card from '../../components/Card'
import data from '../../data'
import { Link,Outlet } from 'react-router-dom'

const Places = () => {
  const cards = data.map(item => {
    return (
      
      <Link to={`/places/${item.id}`} key={item.id}>
        <Card item={item}/>
      </Link>


    )
  })
  return (
    <div className='mt-3  px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
      {cards}

      <Outlet/>
      
    </div>
    
  )
}

export default Places