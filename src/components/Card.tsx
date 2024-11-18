import React from 'react'

const Card = () => {
  return (
    <div className='w-full bg-white rounded-md'>
        <img className='w-full rounded-md' src="/images/ag-flag.gif" alt="flag" width={30} height={30}/>
        <div className='px-10 py-20 space-y-5'>
            <h1  className='font-extrabold'>Algeria</h1>
            <div className='flex items-center '>
                <span className='font-semibold pr-1'>Population:</span>
                <span className='font-light'>54544544545</span>
            </div>
            <div className='flex items-center '>
                <span className='font-semibold pr-1'>Population:</span>
                <span className='font-light'>54544544545</span>
            </div>
            <div className='flex items-center '>
                <span className='font-semibold pr-1'>Population:</span>
                <span className='font-light'>54544544545</span>
            </div>
           
    
        </div>
  
    </div>
  )
}

export default Card