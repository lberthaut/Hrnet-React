import { createGlobalStyle } from "styled-components";

const Employeesliststyle = createGlobalStyle`
.employeeslist_container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-top: 8%;
    font-size: 1.2vw;
}

.table{
    border-collapse: collapse;
    width: 80%;
}

.column_head{
    background-color: #d6d6d6;
    cursor: pointer;
}

.header_array, .column_head{
    border: 1px solid black;
    padding: 0.5% 1%;
}

.array_cell{
    border: 1px solid black;
    padding: 1%;
}
`;

export default Employeesliststyle;
