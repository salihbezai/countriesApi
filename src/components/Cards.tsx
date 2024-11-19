"use client"
import React, { useEffect } from 'react'
import { useQuery } from "@tanstack/react-query";
import Card from './Card';
import Skeleton from 'react-loading-skeleton';

const Cards = () => {


  const { data, error, isLoading } = useQuery(['countries'], async () => {
    const response = await fetch('/api/countries');
    if (!response.ok) {
     
      throw new Error('Failed to fetch countries');
    }
    const countreis = response.json()
    return countreis;
  });


 
  return (      
    
    <div className='grid grid-cols-4 gap-10 mt-8 
    mobile:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
     desktop:grid-cols-4'>
       {
        isLoading?(
          Array(20).fill(null).map(()=>(
            <Skeleton height={400} width={400} count={1} baseColor='#fff' />
          ))
        ):(
          data?.map((country:any,key:any)=>(
            <Card country={country} key={key}/>
          ))
        )
     
       }

    </div>
 
    )
}

export default Cards