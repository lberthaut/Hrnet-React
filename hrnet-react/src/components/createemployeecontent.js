import states from "../datas/states"

export default function Createemployee(){
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
                <input className="date-of-birth" type="text" />

                <label for="start-date">Start Date</label>
                <input className="start-date" type="text" />

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
        <div className="confirmation" className="modal">Employee Created!</div>
        </>
    )
}