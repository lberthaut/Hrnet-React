import { createGlobalStyle } from "styled-components";

const Employeesliststyle = createGlobalStyle`
.employeeslist_container{
display: flex;
flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}

.table{
    border-collapse: collapse;
    width: 80%;
}

.column_head{
    background-color: #d6d6d6;
    cursor: pointer;
}

th, td{
    border: 1px solid black;
    padding: 10px 20 px;
}

`

export default Employeesliststyle;