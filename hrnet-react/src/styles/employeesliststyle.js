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

th, td{
    border: 1px solid black;
    padding: 10px 20 px;
}

`

export default Employeesliststyle;