import { createGlobalStyle } from "styled-components";
import AppleGothic from "../../assets/fonts/AppleSDGothicNeoM.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: "Apple SD Gothic Neo";
        src: local("Apple SD Gothic Neo"),
        url(${AppleGothic}) format('truetype');
        font-weight: 300; 
        font-style: normal;
    }
`;
