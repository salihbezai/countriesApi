"use client"
import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import Card from './Card';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';

const Cards = ({countries,isLoading,error,searchTerm} :any) => {


  


   if(!isLoading && countries.length ===0 )return (
      <div className='w-full text-veryDarkBlueText text-body h-72 text-center flex items-center justify-center'>
        {`Sorry we couldn't find any matches for  ${searchTerm}`}
      </div>
    )

 
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
          
            countries?.map((country:any,key:any)=>(
              <Link key={country.cca3} href={`/country/${country.name.common}`}> 
              <Card  country={country} key={country.cca3}/>
              </Link>
             
            ))
        
          
        )
     
       }

    </div>
 
    )
}

export default Cards