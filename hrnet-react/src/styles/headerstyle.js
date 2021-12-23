import { createGlobalStyle } from "styled-components";

const Headerstyle = createGlobalStyle`
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 20%;
    border-bottom: solid black 1px;
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}

.img-logo{
    width: 30%;
}

.header-nav{
    width: 65%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

a{
    text-decoration: none;
    color: black;
}
`;
export default Headerstyle;
