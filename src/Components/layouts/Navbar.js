import React, { Component } from 'react'
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand ms-5" to="/">
                <img src={logo} alt="logo" style={{ width:'35px' }} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fas fa-bars" style={{ color: '#fff' }}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                <li className="nav-item">
                    <Link className="nav-link active text-white text-uppercase ms-5" aria-current="page" to="/">Home&nbsp;<i class="fa-solid fa-house"></i></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  text-white text-uppercase ms-5" to="/news">News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  text-white text-uppercase ms-5" to="/contacts">Contact Us</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    )
  }
}

export default Navbar