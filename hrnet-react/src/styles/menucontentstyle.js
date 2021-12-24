import { createGlobalStyle } from "styled-components";

const Menucontentstyle = createGlobalStyle`

.menucontent{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 100vh;
    margin: 0 auto;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 45px 5px rgba(0,0,0,0.73);
}

.title{
    margin: 0;
    font-size: 32px;
    padding-bottom: 20%;
}

.link_menucontent{
    text-decoration: none;
    color: black;
    font-size: 20px;
    padding-bottom: 20%;
}
`

export default Menucontentstyle;