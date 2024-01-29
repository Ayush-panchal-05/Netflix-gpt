import { createSlice } from "@reduxjs/toolkit";
const moviessclice= createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies:null ,
    },
    reducer:{
          addPlayingMovies(state , action){
            state.nowPlayingMovies =action.payload ;
          }
    }
});

export const {addPlayingMovies}= moviessclice.actions ;

export default moviessclice.reducer ;