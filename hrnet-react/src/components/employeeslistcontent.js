import ArraySort from "./features/employessort";
import employees from "../datas/mockedemployees";
import { useEffect } from "react";
import columns from "../datas/columns";

export default function Employeeslist({
  firstname,
  lastname,
  street,
  city,
  state,
  zipCode,
  valueDepartment,
  startDate,
  birthday,
}) {
  useEffect(() => {
    ArraySort();
  }, []);

  return (
    <div className="employeeslist_container">
      <h2 className="employeeslist_title">Current Employees</h2>
      <table className="table">
        <thead>
          <tr className="header_array">
            {columns.map(({ title, data }) => (
              <th className="column_head" key={data}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        {/* mocked datas */}
        <tbody>
          {employees.map(
            ({
              id,
              firstname,
              lastname,
              startdate,
              department,
              birthday,
              street,
              city,
              state,
              zipcode,
            }) => (
              <tr key={id}>
                <th className="array_cell">{firstname}</th>
                <th className="array_cell">{lastname}</th>
                <th className="array_cell">{startdate}</th>
                <th className="array_cell">{department}</th>
                <th className="array_cell">{birthday}</th>
                <th className="array_cell">{street}</th>
                <th className="array_cell">{city}</th>
                <th className="array_cell">{state}</th>
                <th className="array_cell">{zipcode}</th>
              </tr>
            )
          )}
          {/* props datas */}
          <tr key={lastname}>
            <th className="array_cell">{firstname}</th>
            <th className="array_cell">{lastname}</th>
            <th className="array_cell">{startDate}</th>
            <th className="array_cell">{valueDepartment}</th>
            <th className="array_cell">{birthday}</th>
            <th className="array_cell">{street}</th>
            <th className="array_cell">{city}</th>
            <th className="array_cell">{state}</th>
            <th className="array_cell">{zipCode}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
