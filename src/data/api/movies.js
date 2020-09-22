import { makeAuthFetch } from './utils'

// export const discover = (opts={}) => makeAuthFetch('/movies', opts)

// my placeholder discover using my json database
const fakeIt = true;
export const discover = (opts={}) => makeAuthFetch('/movies', opts, fakeIt);