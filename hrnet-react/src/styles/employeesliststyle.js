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

.table{
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.headercell{
    font-weight: bold;
}
`;

export default Employeesliststyle;
