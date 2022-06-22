import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

/*Header component, displaying new array form, and employee array*/
export default function Header() {

    /*Go to the Create employee form, with states and input cleared*/
    function refreshPage() {
        const navigate = useNavigate
        navigate("/hrnet-react")
    }

    return (
        <div className="header">
            <Link to={"/"} onClick={refreshPage}><h1 className="title-header">HRnet</h1></Link>
            <div className="header-nav">
                <Link to="/hrnet-react" className="createuser">Create Employee</Link>
                <Link to="/hrnet-react/employeeslist" className="employeeslist">Employees List</Link>
            </div>
        </div>
    )
}