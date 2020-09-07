import React from 'react'
import {
    BrowserRouter as Router
} from 'react-router-dom'

export const withRouter = Wrapped => props => {
    // const basename = props.basename || "";
    return (
        <Router basename={process.env.PUBLIC_URL + "/"}>
            <Wrapped {...props} />
        </Router>
    )
}

export default withRouter;