import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Headerstyle from "../styles/headerstyle";
import Employeeslist from "../components/employeeslistcontent";
import Employeesliststyle from "../styles/employeesliststyle";
import Createemployee from "../components/createemployeecontent";
import Createemployeestyle from "../styles/createemployeestyle";

export default function App() {
  const [firstname, setFirstname] = useState([]);
  const [lastname, setLastname] = useState([]);
  const [street, setStreet] = useState([]);
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);
  const [zipCode, setZipCode] = useState([]);
  const [department, setDepartment] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Headerstyle />
        <Routes>
          <Route
            path="/"
            element={
              <Createemployee
                firstname={firstname}
                setFirstname={setFirstname}
                lastname={lastname}
                setLastname={setLastname}
                street={street}
                setStreet={setStreet}
                city={city}
                setCity={setCity}
                state={state}
                setState={setState}
                zipCode={zipCode}
                setZipCode={setZipCode}
                department={department}
                setDepartment={setDepartment}
              />
            }
          />
          <Route path="employeeslist" element={<Employeeslist />} />
        </Routes>
      </BrowserRouter>
      <Createemployeestyle />
      <Employeesliststyle />
    </>
  );
}
