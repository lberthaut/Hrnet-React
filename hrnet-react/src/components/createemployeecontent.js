import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

import states from "../datas/states"

export default function Createemployee(){
    const [startDate, setStartDate]= useState(new Date());

    return(
        <>
        <div className="createemployee_container">
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label for="first-name">First Name</label>
                <input type="text" className="first-name" />

                <label for="last-name">Last Name</label>
                <input type="text" className="last-name" />

                <label for="date-of-birth">Date of Birth</label>
                <DatePicker selected={startDate} onChange={(date)=> setStartDate(date)} className="date-of-birth"/>

                <label for="start-date">Start Date</label>
                <DatePicker selected={startDate} onChange={(date)=> setStartDate(date)} className="start-date"/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label for="street">Street</label>
                    <input className="street" type="text" />

                    <label for="city">City</label>
                    <input className="city" type="text" />

                    <label for="state">State</label>
                    <select name="state" className="state">{
                        states.map(({name, abbreviation})=>(
                            <option key={abbreviation}>{name}</option>
                        ))
                    }</select>

                    <label for="zip-code">Zip Code</label>
                    <input className="zip-code" type="number" />
                </fieldset>
                
                <div className="department_container">
                <label for="department">Department</label>
                <select name="department" className="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                </div>
            </form>

            <button className="submit_button" onclick="saveEmployee()">Save</button>
        </div>
       {/*  <div className="confirmation" className="modal">Employee Created!</div> */}
        </>
    )
}