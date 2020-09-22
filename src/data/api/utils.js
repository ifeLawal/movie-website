// constants
const BASE_URL = "localhost:8000"
const defaultFetchOpts = {}
const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const AUTH_TOKEN = "Auth_token";

const queryParams = (params) => 
    Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');

const completeUrl = (path, query={}) => {
    let url = `${BASE_URL}${path}`;
    // query is for making a request that needs headers and stuff
    if(Object.keys(query).length > 0) {
        url += (url.indexOf('?') === -1 ? '?' : '&') 
            + queryParams(query);
    }    
    return url;
}

const makeFetchOpts = (opts={headers:{}}) => {
    const userHeaders = opts.headers;
    delete opts.headers;
    const headers = new Headers({
        ...defaultHeaders,
        ...userHeaders
    })
    return {...defaultFetchOpts, ...opts, headers};
}
    
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
export const makeAuthFetch = (path, opts={}) => {
    const fetchOpts = {
        ...opts,
        headers: {
            'Authorization': `Bearer ${AUTH_TOKEN}`
        }
    }
    return makeFetch(path, fetchOpts);
}
