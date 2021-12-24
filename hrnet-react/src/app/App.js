import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createemployeepage from "../pages/createemployeepage";
import Employeeslist from "../pages/employeelistpage";
import Menupage from "../pages/menupage";


export default function App () {

  
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Menupage/>}/>
          <Route path="createuser" element={<Createemployeepage/>}/>
          <Route path="employeeslist" element={<Employeeslist/>}/>
        </Routes>

      </BrowserRouter>
  );
  }