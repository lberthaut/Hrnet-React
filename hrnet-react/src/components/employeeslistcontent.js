import ArraySort from "./features/employessort";
import employees from "../datas/mockedemployees";
import { useEffect } from "react";


import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


/*Array component of the employee, mocked datas and states datas are released here*/
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
  notHide
}) {
  /*Sort function alphabeticalelly, and by date*/
  useEffect(() => {
    ArraySort();
    setCount(count + newEmployeeRow.length)
  }, []);


  const columns = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ];


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const newEmployeeRow = document.getElementsByClassName('newemployeerow');
  let [count, setCount] = React.useState(employees.length)

  return (
    <>
      <Paper className="employeeslist_container">
        <TableContainer className="table">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.data}
                    style={{ minWidth: column.minWidth }} className="headercell"
                  >
                    {column.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.data];
                      return (
                        <TableCell key={column.data}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
              {
                notHide !== false ? (
                  <TableRow key={lastname} className="newemployeerow">
                    <TableCell className="array_cell">{firstname}</TableCell>
                    <TableCell className="array_cell">{lastname}</TableCell>
                    <TableCell className="array_cell">{startDate}</TableCell>
                    <TableCell className="array_cell">{valueDepartment}</TableCell>
                    <TableCell className="array_cell">{birthday}</TableCell>
                    <TableCell className="array_cell">{street}</TableCell>
                    <TableCell className="array_cell">{city}</TableCell>
                    <TableCell className="array_cell">{state}</TableCell>
                    <TableCell className="array_cell">{zipCode}</TableCell>
                  </TableRow>
                ) : (null)
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}