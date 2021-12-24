import Createemployee from "../components/createemployeecontent";
import Header from "../components/header";
import Createemployeestyle from "../styles/createemployeestyle";
import Headerstyle from "../styles/headerstyle";

export default function Createemployeepage() {
  return (
    <>
      <Header /><Headerstyle />
      <Createemployee/><Createemployeestyle/>
    </>
  );
}
