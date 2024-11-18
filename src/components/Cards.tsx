import React from 'react'
import Card from './Card';

const Cards = () => {
    const dummyArray = Array(5).fill(null); // Creates an array with 5 elements

  return (
    <div className='grid grid-cols-4 gap-10 mt-8 
    mobile:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
     desktop:grid-cols-4'>
        {
   dummyArray && dummyArray.map((_, index) =>(
    <Card/>
))
        }

    </div>
 
    )
}

export default Cards