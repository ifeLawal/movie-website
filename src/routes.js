import React from 'react'
import {
    Route
} from 'react-router-dom'

import {
    pageWithoutLayout
} from './containers/page'

import Home from './views/Home/Home'
import About from './views/About/About'

export const Routes = (props) => {
    return (
            <div className="app">
                {/* This where our components and views go */}
                <Route 
                    path="/" exact
                    component={Home}
                />          {/* Path specifies where the person is going */}
                <Route
                    path="/about"
                    render={(renderProps) => 
                        <About {...props} {...renderProps} />
                    }
                />
            </div>
    )
}

export default pageWithoutLayout(Routes);