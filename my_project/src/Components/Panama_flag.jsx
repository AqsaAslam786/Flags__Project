import React from 'react'

export default function Panama_flag() {
  return (
    <div className='bg-green-600 h-70 w-120 flex flex-wrap'>
        <div className='bg-white-700 h-1/2 w-60 flex justify-center items-center'>
        <div className='w-20 h-20 bg-blue-950 clip-path-star mx-auto'></div>

        </div>
        <div className='bg-red-700 w-60 h-1/2'></div>
        <div className='bg-blue-950 w-20 h-1/2'></div>
        <div className='bg-white w-60 h-1/2 flex items-center justify-center'>
        <div className='w-20 h-20 bg-red-700 clip-path-star mx-auto'></div>
        </div>
    </div>
  )
}
