import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../pages/menu";

export default function App () {

  
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Menu/>}/>
        </Routes>

      </BrowserRouter>
  );
  }