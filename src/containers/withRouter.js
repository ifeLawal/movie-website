import React from 'react'
import {
    BrowserRouter as Router
} from 'react-router-dom'

export const withRouter = Wrapped => props => {
    // const basename = props.basename || "";
    return (
        <Router basename="/movie-website">
            <Wrapped {...props} />
        </Router>
    )
}

export default withRouter;