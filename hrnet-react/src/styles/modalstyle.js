import { createGlobalStyle } from "styled-components";

const Modalstyle = createGlobalStyle`
.overlay{
    z-index: 1;
    width: 100vw;
    height: 135%;
    background-color: grey;
    opacity: 0.7;
    position: absolute;
    top: 0;
    cursor: pointer;
}


.modal_container{
    z-index: 2;
    background-color: white;
    width: 35%;
    position: absolute;
    left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  border-radius: 5px;
  box-shadow: 5px 3px 29px 10px rgba(0,0,0,0.5);
  position: fixed;
}

.close_button{
    margin-left: 90%;
    margin-top: 2%;
    cursor: pointer;
}

.modal_title{
    color: red;
    margin: 1%;
}

.text{
    font-size: 18px;
    margin-bottom: 20%;
}

.close{
    width: 16px;
}
`

export default Modalstyle;