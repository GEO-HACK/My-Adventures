import React from 'react'
import Card from '../components/Card'
import data from '../data'

const Places = () => {
  const cards = data.map(item => {
    return (
      <Card
      item= {item}
      />


    )
  })
  return (
    <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {cards}
    </div>
    
  )
}

export default Places