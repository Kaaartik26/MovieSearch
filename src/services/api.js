<<<<<<< HEAD
const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey); 


=======
const API_KEY = "" //api key goes here
>>>>>>> f7409ad230e5b7ee7c2ad4707e21e0b2d56dc172
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
