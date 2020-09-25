import { makeAuthFetch } from './utils'

// export const discover = (opts={}) => makeAuthFetch('/movies', opts)

// tell my makeFetch to fake the api calls by using my local helpers json data
const fakeIt = true;

// send general movie data
export const discover = (opts={}) => makeAuthFetch('/movies', opts, fakeIt);

// send what would be movie configuration data is needed to connect to poster path
// currently just sending empty object since I am using the local path to serve images
export const movieConfig = (opts={}) => makeAuthFetch('/config', opts, fakeIt);

// get a single movie by api id
// currently being faked to get movie from the json by index
export const getMovie = (id, opts={}) => makeAuthFetch(`/movies/${id}`, opts, fakeIt);