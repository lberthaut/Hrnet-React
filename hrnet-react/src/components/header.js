import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.jpg'



export default function Header () {

    return(
        <div className="header">
            <Link to="/" className="header-logo">
                <img className="img-logo" alt="wealth health logo" src={logo}/>
            </Link>
            <h1 className="title-header">HRnet</h1>
            <div className="header-nav">
                <Link to="/createuser" className="createuser">Create Employee</Link>
                <Link to="/employeeslist" className="employeeslist">Employees List</Link>
            </div>
        </div>
    )
}