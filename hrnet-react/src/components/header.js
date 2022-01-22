import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

/*Header component, displaying new array form, and employee array*/
export default function Header() {

    /*Go to the Create employee form, with states and input cleared*/
    function refreshPage() {
        const navigate = useNavigate
        navigate("/")
    }

    return (
        <div className="header">
            <h1 className="title-header">HRnet</h1>
            <div className="header-nav">
                <Link to="/" className="createuser" onClick={refreshPage}>Create Employee</Link>
                <Link to="/employeeslist" className="employeeslist">Employees List</Link>
            </div>
        </div>
    )
}