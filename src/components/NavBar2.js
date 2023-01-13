import React, { Component } from 'react'

export class NavBar2 extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            {/* <svg className="bi me-2" width="40" height="32"><use xlinkHref="./public/logo(1).png" /></svg> */}
                            <svg className="bi me-2" width="40" height="32"></svg>
                            <a href="./public/frontlogoo.png"><img src="./public/frontlogoo.png" alt=""/></a>
                            <span className="fs-4">TIMES OF HINDUSTAN</span>
                        </a>
                        <ul className="nav nav-pills">
                            {/* <li className="nav-item"><a href="/" className="nav-link btn btn-outline-secondary" aria-current="page">Home</a></li> */}
                            <li className="nav-item"><a href="/" className="nav-link">LIVE TV</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">LATEST</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">INDIA</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">COVID</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">WORLD</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">TRENDS</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">OFFBEAT</a></li>
                        </ul>
                    </header>
                </div>
            </div>
        )
    }
}

export default NavBar2
