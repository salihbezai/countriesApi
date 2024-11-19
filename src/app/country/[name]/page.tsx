"use client"
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { ArrowBigLeft, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { useEffect } from 'react'

interface pageProps {
    params:{
        name:string
    }
}
const page = ({params}:pageProps) => {
   
    /*if (!user || !user.id)
        redirect(`/auth-callback?origin=dashboard/${fileid}`)
  
      const file = await db.file.findFirst({
        where: {
          id: fileid,
          userId: user.id,
        },
      })
    
      if (!file) notFound()
  return (
    <div className='w-full'>
        <Button variant="ghost" className='mt-2 px-4 py-2'>
            <Link className='flex items-center' href='/'>
                <ArrowLeft className='mr-2'/>
                Back
             </Link>
        </Button>
        <div className='w-full py-5  mobile:flex-col flex mobile:items-start md:flex-row md:items-center lg:flex-row  md:gap-10 lg:gap-20'>
            <div className='w-full flex-1'>
                <img className='w-full' src="/images/ag-flag.gif" alt="" />
            </div>
            <div className='py-10 space-y-5 flex-1 flex-col items-center justify-center '>
            <h1  className='font-extrabold md:text-2xl'>Algeria</h1>

                <div className='w-full flex  mobile:flex-col
                 md:flex-row md:gap-10  desktop:gap-20'>
                        
                    <div className='mt-3 md:text-body'>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1'>Native Name:</span>
                                <span className='text-body  font-light'>Dz</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1'>Population:</span>
                                <span className='text-body  font-light'>Dz</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1'>Region:</span>
                                <span className='text-body  font-light'>Dz</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1'>Sub Region:</span>
                                <span className='text-body  font-light'>Dz</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1'>Capital:</span>
                                <span className='text-body  font-light'>Dz</span>
                            </div>
                    </div>

                    <div className='mt-3'>
                        <div className='flex items-center'>
                            <span className='text-body font-extralight mr-1'>Native Name:</span>
                            <span className='text-body  font-light'>Dz</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-body font-extralight mr-1'>Population:</span>
                            <span className='text-body  font-light'>Dz</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-body font-extralight mr-1'>Region:</span>
                            <span className='text-body  font-light'>Dz</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-body font-extralight mr-1'>Sub Region:</span>
                            <span className='text-body  font-light'>Dz</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-body font-extralight mr-1'>Capital:</span>
                            <span className='text-body  font-light'>Dz</span>
                        </div>
                    </div>
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default page