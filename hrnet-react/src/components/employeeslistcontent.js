import ArraySort from "./features/employessort"
import employees from "../datas/mockedemployees"

export default function Employeeslist(){
    const columns = [
        { title: 'First Name', data: 'firstName' },
        { title: 'Last Name', data: 'lastName' },
        { title: 'Start Date', data: 'startDate' },
        { title: 'Department', data: 'department' },
        { title: 'Date of Birth', data: 'dateOfBirth' },
        { title: 'Street', data: 'street' },
        { title: 'City', data: 'city' },
        { title: 'State', data: 'state' },
        { title: 'Zip Code', data: 'zipCode' },
    ];
        
    return(
        <div className="employeeslist_container">
            <h2 className="employeeslist_title">Current Employees</h2>
            <table className="table">
            <thead>
            <tr className="header_array">
            {columns.map(({title, data})=>(
                <th className="column_head" key={data} onClick={()=>ArraySort()}>{title}</th>
            ))}
            </tr>
            </thead>
            <tbody>
                     {employees.map(({id, firstname, lastname, startdate, department, birthday, street, city, state, zipcode})=>(
                        <tr><th className="array_cell" key={id}>{firstname}</th>
                        <th className="array_cell"  key={id}>{lastname}</th>
                        <th className="array_cell"  key={id}>{startdate}</th>
                        <th className="array_cell"  key={id}>{department}</th>
                        <th className="array_cell"  key={id}>{birthday}</th>
                        <th className="array_cell"  key={id}>{street}</th>
                        <th className="array_cell"  key={id}>{city}</th>
                        <th className="array_cell"  key={id}>{state}</th>
                        <th className="array_cell"  key={id}>{zipcode}</th></tr>
                    ))}
                    </tbody>
            </table>
        </div>
    )
}

