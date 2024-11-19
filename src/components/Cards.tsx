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


  if(isLoading) (<Skeleton height={5} count={5} className='my-4' />)
  return (
    <div className='grid grid-cols-4 gap-10 mt-8 
    mobile:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
     desktop:grid-cols-4'>
       {
        data?.map((country:any,key:any)=>(
          <Card country={country} key={key}/>
        ))
       }

    </div>
 
    )
}

export default Cards