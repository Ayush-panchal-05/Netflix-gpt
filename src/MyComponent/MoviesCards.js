import React from 'react'

const MoviesCards = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img src={posterPath} alt="Movies Card" />
    </div>
  )
}

export default MoviesCards
