import React from 'react'
import Button from './Button'

const Categoreis = () => {
  return (
    <div>
      <div className="flex  gap-3">
        <Button variant="default" className="h-12" />
        <h1 className="font-medium text-lg text-primary">Today's</h1>
      </div>
      <div className="my-4">
        <h1 className="tracking-wide font-poppins font-bold text-3xl">Browse By Category</h1>
      </div>
    </div>
    
  )
}

export default Categoreis