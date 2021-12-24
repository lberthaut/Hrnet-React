import ArraySort from "./features/employessort"

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
    ]
        
    return(
        <div className="employeeslist_container">
            <h2 className="employeeslist_title">Current Employees</h2>
            <table className="table">
            <thead>
            <tr>
            {columns.map(({title, data})=>(
                <th className="column_head" key={data} onClick={()=>ArraySort()}>{title}</th>
            ))}
            </tr>
            </thead>
            <tbody>
                <tr>
                <td></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

