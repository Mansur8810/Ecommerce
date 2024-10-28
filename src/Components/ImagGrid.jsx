import React from 'react'

const ImagGrid = ({imgSrc,title,description}) => {
  return (
    <div className="card rounded-none image-full bg-black size-full min-h-[284px]">
      <figure>
        <img src={imgSrc} alt={title} className=' object-cover' />
      </figure>
      <article className="card-body *:text-white mt-auto max-w-64">
        <h2 className="card-title font-medium text-xl tracking-normal">{title}</h2>
        <p className=' text-sm font-light'>{description}</p>
        <a href="" className='underline underline-offset-4'>Shop Now</a>
      </article>
    </div>
  )
}

export default ImagGrid