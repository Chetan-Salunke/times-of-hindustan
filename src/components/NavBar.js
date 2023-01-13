import React, { Component } from 'react'

export class NavBar extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">TIMES OF HINDUSTAN</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">LIVE TV</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">LATEST</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">INDIA</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">COVID</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">WORLD</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">TRENDS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">CRYPTOCURRENCY</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">OFFBEAT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">MOVIES</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">TECH</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">EDUCATION</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">LIFESTYLE</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">FOOD</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
