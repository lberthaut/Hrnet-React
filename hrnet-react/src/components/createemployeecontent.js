import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import useModal from '../hooks/usemodal';
import Modal from './modal';

import states from "../datas/states"
import Modalstyle from '../styles/modalstyle';

export default function Createemployee(){
    const [startDate, setStartDate]= useState(new Date());
    const {isShowing, toggle} = useModal();

    const handleSubmit = () =>{
        toggle();
    }

    return(
        <>
        <div className="createemployee_container">
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" className="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" className="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker selected={startDate} onChange={(date)=> setStartDate(date)} className="date-of-birth"/>

                <label htmlFor="start-date">Start Date</label>
                <DatePicker selected={startDate} onChange={(date)=> setStartDate(date)} className="start-date"/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input className="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input className="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" className="state">{
                        states.map(({name, abbreviation})=>(
                            <option key={abbreviation}>{name}</option>
                        ))
                    }</select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input className="zip-code" type="number" />
                </fieldset>
                
                <div className="department_container">
                <label htmlFor="department">Department</label>
                <select name="department" className="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                </div>
            </form>

            <button className="submit_button" onClick={handleSubmit}>Save</button>
        </div>
        <Modal isShowing={isShowing} hide={toggle}/><Modalstyle/>
        </>
    )
}