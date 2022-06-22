import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Headerstyle from "../styles/headerstyle";
import Employeeslist from "../components/employeeslistcontent";
import Employeesliststyle from "../styles/employeesliststyle";
import Createemployee from "../components/createemployeecontent";
import Createemployeestyle from "../styles/createemployeestyle";
import useModal from "../hooks/usemodal";
import useArray from "../hooks/useArray";

/* App componant, which recover states, initialized on Createmployee component*/
export default function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [valueDepartment, setDepartment] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [birthday, setBirthday] = useState(new Date());

  /*Toggle function for the modal*/
  const { isShowing, toggle } = useModal();

  /*Toggle function for the new employee line on the array*/
  const { notHide, switched } = useArray();

  /*Submit function for the form of Createemployee component*/
  const handleSubmit = (evt) => {
    evt.preventDefault();
    toggle();
    switched();
  };

  return (
    <>
      <BrowserRouter>
        <Header
          firstname={firstname}
          setFirstname={setFirstname}
          lastname={lastname}
          setLastname={setLastname} />
        <Headerstyle />
        <Routes>
          <Route
            path="/hrnet-react"
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
                valueDepartment={valueDepartment}
                setDepartment={setDepartment}
                startDate={startDate}
                setStartDate={setStartDate}
                birthday={birthday}
                setBirthday={setBirthday}
                toggle={toggle}
                handleSubmit={handleSubmit}
                isShowing={isShowing}
              />
            }
          />
          <Route
            path="/hrnet-react/employeeslist"
            element={
              <Employeeslist
                firstname={firstname}
                lastname={lastname}
                street={street}
                city={city}
                state={state}
                zipCode={zipCode}
                valueDepartment={valueDepartment}
                startDate={startDate
                  .toDateString()
                  .split(" ")
                  .slice(1)
                  .join(" ")}
                birthday={birthday.toDateString().split(" ").slice(1).join(" ")}
                notHide={notHide}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <Createemployeestyle />
      <Employeesliststyle />
    </>
  );
}
