import { createGlobalStyle } from "styled-components";

/*Styled-component CSS of the new employee form*/
const Createemployeestyle = createGlobalStyle`
.createemployee_container{
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0 auto;
    padding-top: 8%;
    padding-bottom: 2%;
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

.start-date{
    margin-bottom: 10%;
}

fieldset{
    padding-top: 8%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.state{
    margin-bottom: 3%;
    height: 25px;
}

.department_container{
    border: 1px solid grey;
    margin-top: 8%;
    width: 93%;
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-bottom: 5%;
}

.department{
    height: 25px;
    width: 60%;
}

.submit_button{
    height: 25px;
    width: 50%;
    margin: 5% 50% 0% 25%;
}
`

export default Createemployeestyle;