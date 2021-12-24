import Header from "../components/header";
import Headerstyle from "../styles/headerstyle";
import Employeeslist from "../components/employeeslistcontent";
import Employeesliststyle from "../styles/employeesliststyle";

export default function Employeeslistpage() {
  return (
    <>
      <Header /><Headerstyle />
      <Employeeslist/><Employeesliststyle/>
    </>
  );
}
