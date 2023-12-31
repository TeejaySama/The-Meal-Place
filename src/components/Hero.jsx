import React from 'react'

const Hero = () => {
  return (
    <div className='hero-wrapper d-flex justify-content-center justify-content-md-start align-items-center'>
       <div className='text-start'>
        <p className='display-5 text-light '>Healthy Foods</p>
        <h1 className='text-light fw-light'>Explore Different Meals</h1>
        <button className='btn btn-success text-white'>
            <a href="#below" className='text-decoration-none text-white'>See More Below</a>
        </button>
       </div>
    </div>
  )
}

export default Hero
