import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(props){
    return(
        // <div className="main-nav">
        //     <p><Link to="/">Home </Link></p>
        //     <ul >
        //         <li><Link to="/campuses">Campuses</Link></li>
        //         <li><Link to="/students">Students</Link></li>
        //     </ul>
        // </div>

        <header>
            <nav className="navigation-bar">
                <a href="index.html">
                    <img className="logo" src="https://image.freepik.com/free-vector/university-campus-logo_1447-1791.jpg"
                        alt="Main logo"/>
                </a>
                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/campuses">Campuses</Link></li>
                    <li><Link to="/students">Students</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;