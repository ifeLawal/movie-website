import React, { Component } from 'react'
import { getMovie } from '../../data/api/movies'
import { pageWithLayout } from '../../containers/page'

export class MovieDetails extends Component {
    state = { movie: null }
    componentDidMount() {
        const { match } = this.props
        const { id } = match.params

        getMovie(id)
            .then(movie => this.setState({ movie }));
    }

    render() {
        const { movie } = this.state;
        if (!movie) return (
            <div className="loading">Loading...</div>
        ) 
        if(movie === -1) {
            return(<div> Page not found </div>)
        }
        return (
            <div className="movie_details">
                {movie.title}
            </div>
        )
    }
}

export default MovieDetails
