import React, { ReactNode } from 'react'

const Wrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className='px-10 py-7'>
        {children}
    </div>
  )
}

export default Wrapper