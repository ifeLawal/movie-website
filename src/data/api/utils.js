import { Helper } from './helpers'
// constants
const BASE_URL = "localhost:8000"
const defaultFetchOpts = {}
const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const AUTH_TOKEN = "Auth_token";

// setup our parameters to be in a proper url format where the queries are appended to each other using &
// this means we want to check if we already have the ? indicating a query
// so we do not duplicate it
const queryParams = (params) => 
    Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');

// build the URL using any query parameters we might need
const completeUrl = (path, query={}) => {
    let url = `${BASE_URL}${path}`;
    // query is for making a request that needs headers and stuff
    if(Object.keys(query).length > 0) {
        url += (url.indexOf('?') === -1 ? '?' : '&') 
            + queryParams(query);
    }    
    return url;
}

// setup any options we might need to get the data from our API
const makeFetchOpts = (opts={headers:{}}) => {
    const userHeaders = opts.headers;
    delete opts.headers;
    const headers = new Headers({
        ...defaultHeaders,
        ...userHeaders
    })
    return {...defaultFetchOpts, ...opts, headers};
}
    
// get the json data from the movie api
// 
export const makeFetch = (path, opts={}) => {
    const url = completeUrl(path, opts.query);
    const fetchOpts = makeFetchOpts(opts);
    return fetch(url, fetchOpts)
        .then(response => {
            if(response.ok) return response.json();
            const err = response.statusText;
            throw new Error(err);
        }) 
}

// 
export const makeAuthFetch = (path, opts={}, useFake=false) => {
    const fakeNumberOfMovies = 30;
    if(!useFake) {
        const fetchOpts = {
            ...opts,
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN}`
            }
        }
        return makeFetch(path, fetchOpts);
    } else if(path === '/config') {
        return Promise.resolve([{value:true}]);
    } else if(!!path.match(/\d/)) {
        const movieId = parseInt(path.match(/\d/g).join(''));
        return Promise.resolve(Helper.getMovieById(movieId))
    }
    return Promise.resolve(Helper.returnNNumMovies(fakeNumberOfMovies));
}
