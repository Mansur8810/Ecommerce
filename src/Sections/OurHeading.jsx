import React from 'react'
import Button from '../Components/Button'

const OurHeading = ({ heading, text,}) => {
  return (
<div className="flex justify-between">
      <div>
        <div className={`flex gap-3`}>
          <Button variant="default" className="h-12" />
          <h1 className="font-medium text-lg text-primary">{text}</h1>
        </div>
        <div className="my-4">
          <h1 className="tracking-wide font-poppins font-bold text-3xl">
            {heading}
          </h1>
        </div>
      </div>
      
    </div>
  )
}

export default OurHeading