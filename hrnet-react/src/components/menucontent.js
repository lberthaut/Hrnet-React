import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'


export default function Menucontent (){
    return(
        <div className="menucontent">
        <Link to="/" className="logo">
                <img className="img-logo" alt="wealth health logo" src={logo}/>
            </Link>
            <h1 className="title">HRnet</h1>
            <Link to="/" className="link_menucontent">Create Employee</Link>
            <Link to="/employeeslist" className="link_menucontent">Employees List</Link>
        </div>
    )
}