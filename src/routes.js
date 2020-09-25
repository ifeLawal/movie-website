import React from 'react'
import {
    Route, Switch
} from 'react-router-dom'

import {
    pageWithoutLayout
} from './containers/page'

import Home from './views/Home/Home'

export const Routes = (props) => {
    return (
            <Switch className="app">
                <Route 
                    path="/"
                    render={(renderProps) => 
                        <Home {...props} {...renderProps} />
                    }
                />          
            </Switch>
    )
}

export default pageWithoutLayout(Routes);