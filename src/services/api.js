import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';

const BEARER =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk';

const language = 'en-US';

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

const fetchMovies = async options => {
  try {
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export async function getTrendingAllDay(currentWay, page = 1) {
  const options = generateOption(currentWay, { page, language });
  return fetchMovies(options);
}

export async function getSearchMovies(
  currentWay,
  query,
  page = 1,
  include_adult = 'false'
) {
  const options = generateOption(currentWay, {
    query,
    page,
    language,
    include_adult,
  });
  return fetchMovies(options);
}

export async function getMovieDetails(currentWay) {
  const options = generateOption(currentWay, { language });
  return fetchMovies(options);
}

export async function getCastData(currentWay) {
  const options = {
    method: 'GET',
    url: `${URL}/${currentWay}`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER}`,
    },
  };
  return fetchMovies(options);
}

export async function getMovieReviews(currentWay, page = 1) {
  const options = generateOption(currentWay, { language, page });
  return fetchMovies(options);
}
