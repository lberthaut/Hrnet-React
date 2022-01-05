import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useModal from "../hooks/usemodal";
import Modal from "./modal";

import states from "../datas/states";
import Modalstyle from "../styles/modalstyle";

export default function Createemployee({
  firstname,
  setFirstname,
  lastname,
  setLastname,
  street,
  setStreet,
  city,
  setCity,
  state,
  setState,
  zipCode,
  setZipCode,
  valueDepartment,
  setDepartment
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [birthday, setBirthday] = useState(new Date());
  const { isShowing, toggle } = useModal();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    toggle();
  };

  return (
    <>
      <div className="createemployee_container">
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            className="first-name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            className="last-name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            selected={birthday}
            onChange={(birthdayDate) => setBirthday(birthdayDate)}
            className="date-of-birth"
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="start-date"
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              className="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              className="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="state">State</label>
            <select
              name="state"
              className="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
            <option key="null"></option>
              {states.map(({ name, abbreviation }) => (
                <option key={abbreviation} value={abbreviation}>{name}</option>
              ))}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              className="zip-code"
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </fieldset>

          <div className="department_container">
            <label htmlFor="department">Department</label>
            <select
              name="department"
              className="department"
              value={valueDepartment}
              onChange={(e) => setDepartment(e.target.value)}
            >
            <option key="null2"></option>
              <option valuedepartment="Sales">Sales</option>
              <option valuedepartment="Marketing">Marketing</option>
              <option valuedepartment="Engineering">Engineering</option>
              <option valuedepartment="Human Resources">Human Resources</option>
              <option valuedepartment="Legal">Legal</option>
            </select>
          </div>
          <button className="submit_button" type="submit" value="Submit">
            Save
          </button>
        </form>
      </div>
      <Modal isShowing={isShowing} hide={toggle} />
      <Modalstyle />
    </>
  );
}
