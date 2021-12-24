import { createGlobalStyle } from "styled-components";

const Createemployeestyle = createGlobalStyle`
.createemployee_container{
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0 auto;
    padding-top: 2%;
}

#create-employee{
    display: flex;
    flex-direction: column;
}

label{
    margin: 3%;
    width: 40%;
}

input{
    margin-bottom: 3%;
    width: 60%;
}

#start-date{
    margin-bottom: 10%;
}

fieldset{
    padding-top: 8%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.department_container{
    border: 1px solid black;
    margin-top: 8%;
    width: 99%;
    display: flex;
    flex-direction: column;
}

#department{
    height: 35px;
}
`

export default Createemployeestyle;