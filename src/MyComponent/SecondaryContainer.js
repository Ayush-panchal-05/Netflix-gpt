import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList' ;

const SecondaryContainer = () => {
 
 const movies=useSelector((store)=>store.movies)  ;
  return (
    <div>
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
<MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
<MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
<MovieList title={"Comedy"} movies={movies.nowPlayingMovies}/>
<MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer
