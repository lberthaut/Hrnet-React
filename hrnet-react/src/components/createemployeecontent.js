import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "./modal";
import states from "../datas/states";
import department from "../datas/department";
import Modalstyle from "../styles/modalstyle";

/*Form component which states get initialized*/
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
  setDepartment,
  startDate,
  setStartDate,
  birthday,
  setBirthday,
  toggle,
  isShowing,
  handleSubmit
}) {

  return (
    <>
      <div className="createemployee_container">
        <h2>Create Employee</h2>

        <form action="#" id="create-employee" onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            className="first-name"
            name="first-name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            className="last-name"
            name="last-name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            name="date-of-birth"
            selected={birthday}
            onChange={setBirthday}
            className="date-of-birth"
            placeholderText=""
            required
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            name="start-date"
            selected={startDate}
            onChange={setStartDate}
            className="start-date"
            placeholderText=""
            required
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              className="street"
              name="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              className="city"
              name="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="state">State</label>
            <select
              name="state"
              className="state"
              selected={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option key="null"></option>
              {states.map(({ name, abbreviation }) => (
                <option key={abbreviation} value={abbreviation}>
                  {name}
                </option>
              ))}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              className="zip-code"
              name="zip-code"
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
              selected={valueDepartment}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option key="null2"></option>
              {department.map(({ name }) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </div>

          <button className="submit_button" type="submit" value="Submit">
            Save
          </button>
        </form>
      </div>
      {/*Modal component, which is displaying when the form is submitted*/}
      <Modal isShowing={isShowing} hide={toggle} firstname={firstname} lastname={lastname} />
      <Modalstyle />
    </>
  );
}
