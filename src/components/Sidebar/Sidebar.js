import React from 'react'
import {NavLink} from 'react-router-dom'

const isActive = (match, location) => {
    return match && match.url === location.pathname;
}

export const Sidebar = props => {
    return (
        <div className="sidebar">
            <section>
                <div className="heading">Nav</div>
            </section>
            <section>
                <div className="heading">Links</div>
                <ul>
                    <li>
                        <NavLink 
                        to="/" isActive={isActive}
                        >Home </NavLink>
                    </li>
                    <li>
                        <NavLink 
                         to="/about" isActive={isActive}
                        >
                        About</NavLink>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Sidebar;