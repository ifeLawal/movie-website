import React from 'react'
import { Link } from 'react-router-dom'

const posterPath = ({moviePoster, base_path}) => {
    return `${base_path}${moviePoster}`
}

export const Poster = ({id, title, moviePoster}) => {
    return (
        <Link 
            className="poster"
            to={`/${id}`}
        >
        <div>
           <div>{title}</div>
               <img 
               alt={`${title} movie poster`}
               src={posterPath({moviePoster,base_path:`${process.env.PUBLIC_URL}/imgs`})}
               />
           </div>
        </Link>
    )
}

export default Poster;
