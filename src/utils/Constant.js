
 export const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTc5ZjNlYzdmMDczOTIxMGU4Nzk2YTIzMjI0MGIzYSIsInN1YiI6IjY0ZjMwNGY4MWYzMzE5MDBlMzU2OThkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RfBLyXla888SmHJlYhpT4somFTD0JrNd91_7G6hXMkI'
    }
  };