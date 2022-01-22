import React from 'react';
import { Link } from 'react-router-dom';

/*Header component, displaying new array form, and employee array*/
export default function Header() {
    return (
        <div className="header">
            <h1 className="title-header">HRnet</h1>
            <div className="header-nav">
                <Link to="/" className="createuser">Create Employee</Link>
                <Link to="/employeeslist" className="employeeslist">Employees List</Link>
            </div>
        </div>
    )
}