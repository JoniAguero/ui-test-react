import React, { Component } from 'react'
import './Navbar.css';
import Hexagono from './Hexagono/Hexagono';

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <Hexagono />
            <a className="dashboard" href="/">Dashboard</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link black" href="/">Network</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link black" href="/">Network</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link black" href="/">Network</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link black" href="/">Network</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link black" href="/">Network</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link black" href="/">Billing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link black" href="/">Network</a>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <div className="btn-group dropleft">
                        <button className="btn btn-sm search">
                            <i className="fas fa-search"></i>
                        </button>
                        <button className="btn btn-sm question">
                            <i className="far fa-question-circle"></i>
                        </button>
                        <div className="relative">
                            <button className="btn btn-sm bell">
                                <i className="fas fa-bell"></i>
                            </button>
                            <span className="badge badge-danger">2</span>
                        </div>
                        <div className="user">
                            
                        </div>
                        <button type="button" className="btn btn-link dropdown-toggle arrow" data-toggle="dropdown"  aria-expanded="false">
                            <i className="fas fa-angle-down"></i>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <a className="dropdown-item" href="/">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Separated link</a>
                        </div>
                        </div>
                </div>
            </div>
        </nav>
    )
  }
}

export default Navbar
