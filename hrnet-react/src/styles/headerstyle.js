import { createGlobalStyle } from "styled-components";

/*Styled-component CSS of the header*/
const Headerstyle = createGlobalStyle`
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid black 1px;
    box-shadow: 0px 7px 4px -6px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 10;
    padding-left: 3%;
}

.header-nav{
    width: 70%;
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
    padding-right: 30%;
}
`
export default Headerstyle;
