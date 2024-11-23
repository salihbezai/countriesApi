
import React from 'react'

const Card = ({country}:any) => {
  return (
    <div className='w-full h-full bg-white dark:bg-darkblue  transition-all rounded-md overflow-hidden 
    cursor-pointer shadow-md hover:shadow-lg translate-y-6 hover:scale-105 max-h-[25rem] max-w-sm mx-auto'>
        <img className='w-full h-1/2  object-cover rounded-md' src={country.flags.svg} alt={country.flags.alt} />
        <div className='p-6 h-1/2 dark:bg-darkBlueElements dark:text-whiteText'>
            <h2  className='font-extrabold text-xl overflow-hidden'>{country.name.common}</h2>
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