"use client"
import { useState } from 'react'
import { Button } from './ui/button'
import { Lightbulb, Moon, Sun } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [ selectedMode, setSelectedMode ] = useState('dark')

  const handMode = ()=>{
    const html = document.getElementsByTagName('html');
    const currentMode = html[0].className;
    const modeBtn = document.getElementById('btn-mode')
    if(currentMode === 'dark'){
      html[0].className='light'
      setSelectedMode('light')
    }else{
      html[0].className='dark'
      setSelectedMode('dark')
    }
  }
  return (
    <nav className='sticky h-14 w-full px-4 bg-white dark:bg-darkBlueElements'>
      <div className='flex justify-between items-center h-14'>
      <div className='text-veryDarkBlueText text-detail font-bold'>
        <Link className='dark:text-white' href='/'>Where in the world?</Link>
      </div>
      <Button id='btn-mode' className='bg-veryLightGrayBg text-detail' onClick={handMode} variant="ghost">
        {
          selectedMode === 'dark' ?(
            <>
            <Moon/>
            Dark Mode
            </>
          ):(
            <>
             <Sun/>
             Light Mode
            </>
   
          )
        
        
        }
       
      </Button>
      </div>
    </nav>
  )
}

export default Navbar