import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute  text-white w-screen bg-gradient-to-r from-black h-screen'>
      <div className="pt-36 px-12">

      <h1 className="font-bold text-3xl pb-4">{title}</h1>
      <p className='w-1/4'>{overview}</p>
      <div className="pt-6">
        <button className="bg-gray-500 w-24 h-10 text-white bg-opacity-50 mr-4 rounded-md">▶ Play</button>
        <button className="bg-gray-500 w-24 h-10 text-white bg-opacity-50 rounded-md">More Info</button>
      </div>
      </div>
    </div>
  )
}

export default VideoTitle
