import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute px-10  text-white w-screen '>
      <div className="pt-64 px-12">

      <h1 className="font-bold text-3xl pb-4">{title}</h1>
      <p style={{width:"25rem"}}>{overview}</p>
      <div className="pt-6">
        <button className="bg-white w-24 h-10 text-lg  text-black mr-4 rounded-md hover:bg-opacity-60">  Play</button>
        <button className="bg-gray-500 w-24 h-10 text-white bg-opacity-50 rounded-md">More Info</button>
      </div>
      </div>
    </div>
  )
}

export default VideoTitle
