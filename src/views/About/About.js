import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { pageWithLayout } from '../../containers/page'

export const About = () => {
    return (
        <div className="about">
            <h2>About us</h2>
            <Link to="/"> <Button variant="outline-primary">Go home</Button></Link>
        </div>
    )
}

export default About