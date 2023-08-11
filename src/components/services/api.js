import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';

// const API_KEY = 'b7837d8e8b9f5b9281e4f3836f40fc32';
const BEARER =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk';

function generateOption(addURL, params) {
  return {
    method: 'GET',
    url: `${URL}/${addURL}`,
    params,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER}`,
    },
  };
}

const fetchTrandingMovies = async options => {
  try {
    const response = await axios.request(options);

    return response.data;
  } catch (err) {
    console.error(err);

    throw new Error(err);
  }
};

export async function getTrendingAllDay(language = 'en-US') {
  const options = generateOption('trending/movie/day', { language });
  return fetchTrandingMovies(options);
}

export { fetchTrandingMovies };

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
