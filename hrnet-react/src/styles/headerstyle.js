import { createGlobalStyle } from "styled-components";

const Headerstyle = createGlobalStyle`
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid black 1px;
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 0;
}

.img-logo{
    width: 35%;
}

.header-nav{
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20
}

a{
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 18px;
}

.title-header{
    padding-right: 30%;
}

.employeeslist{
    padding-right: 10%;
}
`
export default Headerstyle;
