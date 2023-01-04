const BASE_URL = "http://localhost:8080"


  // 'https://project-auth-3adyn7z7ja-uc.a.run.app'

  export const API_URL = (slug) => `${BASE_URL}/${slug}`


  // added from earlier project
export const POPULARMOVIE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=ef036d5d52e9f5b31fbadf6ef00b48d2&language=en-US&page=1';
export const MOVIEDETAILS_URL = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}?api_key=ef036d5d52e9f5b31fbadf6ef00b48d2&language=en-US`;


  // NOT USING:
export const REGISTER_URL =
  'https://project-auth-3adyn7z7ja-uc.a.run.app/register';

export const SIGNIN_URL =
  'https://project-auth-3adyn7z7ja-uc.a.run.app/signin';

  export const PROFILES_URL =
  'https://project-auth-3adyn7z7ja-uc.a.run.app/profiles';