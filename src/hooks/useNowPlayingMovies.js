import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import axios from "axios";
import { useEffect, useState } from "react";

const useNowPlayingMovies=()=>{
    const dispatch = useDispatch() ;
  // const [data, setdata]= useState([]) ;
    const instance = axios.create(
      {
        baseURL: 'https://api.themoviedb.org/'
      }
    );
  
  
    const getNowPlayingMovies = async() => {
      try {
        const response =await instance.get(`3/movie/now_playing?api_key=4e79f3ec7f0739210e8796a232240b3a&page1`)
        const ptr=response.data ;
        //console.log(ptr.results) ;
        // setdata(ptr.results);
        dispatch(addNowPlayingMovies(ptr.results)) ;
      } catch (error) {
        console.error(error) ;
      }
  };
  useEffect(()=>{
    
    getNowPlayingMovies() ;
  },[]) ;
} ;

//export const ptr = useNowPlayingMovies.data ;
export default useNowPlayingMovies ;