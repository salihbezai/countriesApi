import React from 'react'
import { Button } from './ui/button'
import { Moon } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='sticky h-14 w-full px-4 bg-white dark:bg-darkBlueElements'>
      <div className='flex justify-between items-center h-14'>
      <div className='text-veryDarkBlueText text-detail font-bold'>Where in the world?</div>
      <Button className='bg-veryLightGrayBg text-detail' variant="ghost">
        <Moon/>
        Dark Mode
      </Button>
      </div>
    </nav>
  )
}

export default Navbar