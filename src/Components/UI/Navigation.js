import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import '../../Components/Styles/Styles.css';

const Navigation = () => {
    return (
        <div>
            <nav id="navBar" className="navbar navbar-expand-md navbar-dark">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <img alt="mpa logo" className="mpalogo" src="/images/mpalogo.png"/>
                    </Link>
                    <button className="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">HOME</Link>
                            </li>
                            <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="!#"   id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		            ABOUT
		        	</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/about">About</a>
                                    <a class="dropdown-item" href="/faq">FAQ</a>
                                    <a class="dropdown-item" href="/resources">Resources</a>
                                </div>
                            </li>
                            <div className="nav">
                                <li className="nav-item">
                                    <Link to="/membership" className="nav-link">PROFESSIONALS</Link>
                                </li>
                            </div>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">CONTACT</Link>
                            </li>

                        </ul>
                    </div>
                </Container>
            </nav>
        </div>
    )
}

export default Navigation
