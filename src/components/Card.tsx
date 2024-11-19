
import React from 'react'

const Card = ({country}:any) => {
    console.log(JSON.stringify(country))
  return (
    <div className='w-full bg-white rounded-md shadow-lg'>
        <img className='w-full h-72  object-cover rounded-md' src={country.flags.svg} alt={country.flags.alt} />
        <div className='px-10 py-20 space-y-5'>
            <h1  className='font-extrabold'>{country.name.common}</h1>
            <div className='flex items-center '>
                <span className='font-semibold pr-1'>Population:</span>
                <span className='font-light'>{country.population}</span>
            </div>
            <div className='flex items-center '>
                <span className='font-semibold pr-1'>Region:</span>
                <span className='font-light'>{country.region}</span>
            </div>
            <div className='flex items-center '>
                <span className='font-semibold pr-1'>Capital:</span>
                <span className='font-light'>{country.capital}</span>
            </div>
           
    
        </div>
  
    </div>
  )
}

export default Card