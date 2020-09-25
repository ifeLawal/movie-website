import React from 'react'
import Poster from './Poster'

export const PosterList = ({movies, movieConfig}) => {
    return (
        <div className="poster_list">
        
          {
            movies
                .map(({id, movie}, index) => {
                    
                    return (
                        <Poster
                            key={id}
                            id={id}
                            {...movie}

                        />)
                })
        }
        </div>
    )
}

export default PosterList
