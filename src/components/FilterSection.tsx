import React from 'react'
import { Search } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from './ui/input'
  

const FilterSection = () => {
  return (
    <div className='flex items-center justify-between sm:flex-row sm:items-center mobile:flex-col mobile:items-start mobile:space-y-3 gap-4'>
        <div className='flex items-center bg-white rounded-sm px-4 py-2 border-none'>
            <Search className='text-icon' size={18}/>
            <Input className='text-detail px-4 py-5 w-full h-8 border-transparent rounded-none
            focus-visible:ring-0 ' type="text" placeholder='Search for a country…'/>
        </div>
        <div className='flex items-center bg-white rounded-sm px-4 py-2 border-none '>
        <Select>
            <SelectTrigger className="w-[180px] focus:outline-none focus:ring-0 border-none rounded-none">
                <SelectValue className='text-detail' placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem className='text-detail' value="light">Light</SelectItem>
                <SelectItem className='text-detail' value="dark">Dark</SelectItem>
                <SelectItem className='text-detail' value="system">System</SelectItem>
            </SelectContent>
        </Select>
        </div>
    </div>
  
  )
}

export default FilterSection