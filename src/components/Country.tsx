
"use client"
import { Button } from '@/components/ui/button'
import {  ArrowLeft, LoaderIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {  useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'


const page =   ({ name }: {name:string}) => {
    const [country,setCountry] = useState(null)
    const [isLoading,setIsloading] = useState(true)


    useEffect(()=>{
        console.log("then name "+name)
        const getCountry=async()=>{
            try {
                const response = await fetch(`/api/country/${name}`,{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name})
                })
                console.log("this fetches ")
                const data = await response.json();
                if(response.ok){
                    setIsloading(false)
                    setCountry(data[0])
                    console.log("country "+country)
                }else{
                    setIsloading(false)
                    setCountry(null)
                }
            } catch (error) {
                    console.log("errro "+error)
            }
           
        }
        getCountry()
    },[name])
    
    console.log("the country is "+JSON.stringify(country))

    if(isLoading) return(
        <div role="status" className='flex justify-center items-center h-screen'>
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-veryDarkBlueText" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    )    
    if(!country && !isLoading) return notFound()
  return (
    <div className='w-full'>
        <Button variant="ghost" className='mt-2 px-4 py-2' >
            <Link className='flex items-center' href='/'>
                <ArrowLeft className='mr-2'/>
                Back
             </Link>
        </Button>
        <div className='w-full py-5  mobile:flex-col flex mobile:items-start md:items-center lg:flex-row  md:gap-10 lg:gap-20'>
            <div className='w-full flex-1'>
                <img className='w-full' src={country && country.flags.svg} alt={country ? country.name.common:'flag'} />
            </div>
            <div className='py-10 space-y-5 flex-1 flex-col items-center justify-center '>
            <h1  className='font-extrabold md:text-2xl'>Algeria</h1>

                <div className='w-full flex  mobile:flex-col
                 md:flex-row md:gap-10  desktop:gap-20'>
                        
                    <div className='mt-3 md:text-body'>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1'>Native Name:</span>
                                <span className='text-body  font-light'>{country && country.name.common}</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1'>Population:</span>
                                <span className='text-body  font-light'>{country && country.population}</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1'>Region:</span>
                                <span className='text-body  font-light'>{country && country.region}</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1'>Sub Region:</span>
                                <span className='text-body  font-light'>{country && country.subregion}</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1'>Capital:</span>
                                <span className='text-body  font-light'>{country && country.capital}</span>
                            </div>
                    </div>

                    <div className='mt-3'>
                        <div className='flex items-center'>
                            <span className='text-body font-extralight mr-1'>Top Level Domain:</span>
                            <span className='text-body  font-light'>{country && country.tld[0]}</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-body font-extralight mr-1'>Currencies:</span>
                            <span className='text-body  font-light'>{country && Object.keys(country.currencies)[0]}</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-body font-extralight mr-1'>Languages:</span>
                            <span className='text-body  font-light'>{country && Object.keys(country.languages).map((lang,key)=>(
                                <span key={key} className='mr-1'>{lang.charAt(0).toUpperCase() + lang.slice(1)}.</span>
                            ))}</span>
                        </div>
                    
                    </div>
                
                </div>

                <div className='flex mobile:flex-col sm:flex-col md:flex-row'>
                    <div className='flex flex-row items-center gap-2'>
                    <span className='text-body  font-extralight mr-1'>Border Countries:</span>
                    {
                        country && country.borders &&country.borders.map((border)=>(
                            <span className='text-body flex items-center justify-center  
                            font-light bg-white rounded border-zinc-400 shadow-lg px-10 py-1 '>{border}</span>
                        ))
                    }
                    </div>
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default page