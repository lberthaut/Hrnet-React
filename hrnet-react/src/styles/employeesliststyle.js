import { createGlobalStyle } from "styled-components";

/*Styled-component CSS of the employee array*/
const Employeesliststyle = createGlobalStyle`
.employeeslist_container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-top: 8%;
    font-size: 1vw;
    width: 80%;
    z-index: -10;
}

th{
    cursor: pointer;
    border-left: 1px black solid;
    border-right: 1px black solid;

    grid-template-columns: 50% 50%;
}

.MuiTableCell-root{
    text-align: center;
    padding: 12px;
}

.headercell{
    font-weight: bold;
}
`;

export default Employeesliststyle;
