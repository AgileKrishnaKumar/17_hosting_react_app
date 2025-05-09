import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.aboutTitle}</a>
                            </li>
                        </ul>
                             <div className={`form-check form-switch text-${props.mode==="dark"? "light": "dark"}`}>
                            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                            </div>

                    </div>
                </div>
                
            </nav>

        </>
    );
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutTitle: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Krishna',
    aboutTitle: 'Kumar'
  };