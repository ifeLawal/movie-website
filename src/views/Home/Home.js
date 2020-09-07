import React from 'react'
import { Link } from 'react-router-dom'
import { pageWithLayout } from '../../containers/page'
import { Button } from 'react-bootstrap'

export const Home = () => {
    return (
        <div className="home">
            <h2>Welcome home</h2>
            <Link to="/about"> <Button variant="outline-primary">Go to the About page</Button></Link>
        </div>
    )
}

export default pageWithLayout(Home)