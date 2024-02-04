import axios from 'axios';
import React, { useEffect, useState } from 'react'
import addTrailerVideo from '../utils/moviesSlice' ;
import { useDispatch, useSelector } from 'react-redux';

const VideoBackground = ({movie_id}) => {
  
   const [trailerVideo , setTrailerVideo]= useState() ;
  const instance = axios.create(
    {
      baseURL: 'https://api.themoviedb.org/'
    }
  );


  const getmovietrailer = async() => {
    try {
      const response =await instance.get(`3/movie/${movie_id}/videos?api_key=4e79f3ec7f0739210e8796a232240b3a`)
     
      const filter_data= response.data.results.filter((video)=>video.type==="Trailer") ;
 
      const trailer= filter_data.length?filter_data[0]:response.data.results[0] ;
      setTrailerVideo(trailer) ;
  
    } catch (error) {
      console.error(error) ;
      
    }
};
useEffect(()=>{
  
  getmovietrailer() ;
},[]) ;
  return (
    <div>
      <iframe className="w-screen h-screen"  src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground
