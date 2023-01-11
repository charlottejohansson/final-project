const BASE_URL = "https://final-project-t3aeo2jk2a-lz.a.run.app/"

export const API_URL = (slug) => `${BASE_URL}/${slug}`

  // Most resently added movies
export const POPULARMOVIE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=ef036d5d52e9f5b31fbadf6ef00b48d2&language=en-US&page=1';
export const MOVIEDETAILS_URL = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}?api_key=ef036d5d52e9f5b31fbadf6ef00b48d2&language=en-US`;
export const MOVIEDETAILSEARCH_URL = (movie_id) => `https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${title}?api_key=e8ab353f9dmsh0ed7b069671f69cp1bb323jsn7175036a5189`;

