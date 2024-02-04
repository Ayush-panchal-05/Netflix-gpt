import React from 'react'
import MoviesCards from './MoviesCards'

const MovieList = ({title,movies}) => {
  console.log(movies);
  return (
    <div className='px-4 bg-black'>
       <h1 className='text-3xl py-2 text-white'>{title}</h1>
      <div className="flex overflow-x-scroll">
      <div className="flex">
        {movies &&movies.map((movie)=>(<MoviesCards key={movie.id} posterPath={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>))}
      </div>
      </div>
    </div>
  )
}

export default MovieList
