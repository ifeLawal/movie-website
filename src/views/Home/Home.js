import React, { Component, Fragment  } from 'react'
import { Link } from 'react-router-dom'
import { pageWithoutLayout, pageWithLayout } from '../../containers/page'
import { Button } from 'react-bootstrap'
import { discover } from '../../data/api/movies'

import { Switch, Route } from 'react-router'

import MovieDetails from './MovieDetails'
import PosterList from '../../components/Poster/List'
import About from '../About/About'

export class Home extends Component {
    state = { movies:[] }

    componentDidMount() {
        discover().then(movies => {
            this.setState({movies: movies})
        })
    }

    render() {
        const { movies } = this.state;

        const { movieConfig } = this.props;
        return (
            <Switch className="home">
                <Route
                    path="/" exact
                    render={(renderProps) => {
                        return (
                            <Fragment>
                                <h2>Welcome to Watchorama</h2>
                                <PosterList
                                movies={movies}
                                movieConfig={movieConfig} 
                                /> 
                            </Fragment>
                        )
                    }}
                />
                <Route 
                    path={`/:id`}
                    render={(renderProps) => {
                        return (
                            <Fragment>
                                <MovieDetails
                                    {...renderProps}
                                />
                            </Fragment>
                        )
                    }}
                />
                <Route
                    path="/about"
                    render={(renderProps) => 
                        <About {...renderProps} />
                    }
                />
                <Link to="/about"> <Button variant="outline-primary">Go to the About page</Button></Link>
            </Switch>
        )
    }
}
export default pageWithLayout(pageWithoutLayout(Home))