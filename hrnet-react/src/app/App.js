import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createemployeepage from "../pages/createemployeepage";
import Menupage from "../pages/menupage";


export default function App () {

  
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Menupage/>}/>
          <Route path="createuser" element={<Createemployeepage/>}/>
        </Routes>

      </BrowserRouter>
  );
  }