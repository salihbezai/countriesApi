
"use client"
import { Button } from '@/components/ui/button'
import {  ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {  useEffect, useState } from 'react'


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

    if(isLoading)return(
        <div role="status" className='flex justify-center items-center h-screen'>
            <svg aria-hidden="true" className="w-8 h-8 dark:text-whiteText text-gray-200 animate-spin dark:fill-darkBlueElements  fill-veryDarkBlueText" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
        </div>
    )     
    if(!country && !isLoading) return notFound()
  return (
    <div className='w-full'>
        <Button variant="ghost" className='mt-2 px-4 py-2 shadow-lg active:scale-95 hover:opacity-80' >
            <Link className='flex items-center text-veryDarkBlueText dark:text-whiteText' href='/'>
                <ArrowLeft className='mr-2'/>
                Back
             </Link>
        </Button>
        <div className='w-full py-5   mobile:flex-col flex mobile:items-start md:items-center lg:flex-row  md:gap-6 lg:gap-20'>
            
                <img className='sm:w-1/2 object-contain max-h-[22rem]' src={country && country.flags.svg} alt={country ? country.name.common:'flag'} />
       
            <div className='py-10 space-y-5  flex-col items-center justify-center '>
            <h1  className='font-extrabold md:text-2xl text-veryDarkBlueText dark:text-whiteText'>{country && country.name.common}</h1>

                <div className='w-full flex  mobile:flex-col
                 md:flex-row md:gap-10  desktop:gap-20'>
                        
                    <div className='mt-3 md:text-body'>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1 text-veryDarkBlueText dark:text-whiteText'>Native Name:</span>
                                <span className='text-body  font-light text-veryDarkBlueText dark:text-whiteText'>{country && country.name.common}</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1 text-veryDarkBlueText dark:text-whiteText'>Population:</span>
                                <span className='text-body  font-light text-veryDarkBlueText dark:text-whiteText'>{country && country.population}</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1 text-veryDarkBlueText dark:text-whiteText'>Region:</span>
                                <span className='text-body  font-light text-veryDarkBlueText dark:text-whiteText'>{country && country.region}</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1 text-veryDarkBlueText dark:text-whiteText'>Sub Region:</span>
                                <span className='text-body  font-light text-veryDarkBlueText dark:text-whiteText'>{country && country.subregion}</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-body font-extralight mr-1 text-veryDarkBlueText dark:text-whiteText'>Capital:</span>
                                <span className='text-body  font-light text-veryDarkBlueText dark:text-whiteText'>{country && country.capital}</span>
                            </div>
                    </div>

                    <div className='mt-3'>
                        <div className='flex items-center'>
                            <span className='text-body font-extralight mr-1 text-veryDarkBlueText dark:text-whiteText'>Top Level Domain:</span>
                            <span className='text-body  font-light text-veryDarkBlueText dark:text-whiteText'>{country && country.tld[0]}</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-body font-extralight mr-1 text-veryDarkBlueText dark:text-whiteText'>Currencies:</span>
                            <span className='text-body  font-light text-veryDarkBlueText dark:text-whiteText'>{country && Object.keys(country.currencies)[0]}</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-body font-extralight mr-1 text-veryDarkBlueText dark:text-whiteText'>Languages:</span>
                            <span className='text-body  font-light text-veryDarkBlueText dark:text-whiteText'>{country && Object.keys(country.languages).map((lang,key)=>(
                                <span key={key} className='mr-1 text-veryDarkBlueText dark:text-whiteText'>{lang.charAt(0).toUpperCase() + lang.slice(1)}.</span>
                            ))}</span>
                        </div>
                    
                    </div>
                
                </div>

                <div className='flex mobile:flex-col sm:flex-col md:flex-row'>
                    <div className='flex flex-row items-center gap-2 mobile:flex-wrap sm:flex-wrap '>
                    <span className='text-body  font-extralight mr-1 text-veryDarkBlueText dark:text-whiteText'>Border Countries:</span>
                    {
                      country && country.borders ? (country.borders.map((border)=>(
                        <span className='text-sm flex items-center justify-center sm:flex-wrap  
                        font-light cursor-pointer bg-white rounded border-zinc-400 shadow-lg px-10 py-1
                         text-veryDarkBlueText dark:text-veryDarkBlueText hover:opacity-80 active:scale-95'>{border}</span>
                    ))):(
                        <span className='text-veryDarkBlueText dark:text-whiteText'>No Information</span>
                    )

                        
                    }
                    </div>
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default page