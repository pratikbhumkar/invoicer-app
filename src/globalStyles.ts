import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    body{
        background-color: #F6F6F6;
    }
    .header{
        color: #001052
    }
    .sub-header{
        color: #5A6C80
    }
    .active{
        color: #001052;
    }
    input:valid {
        outline: 0.5px solid green;
        border-radius: 5px;
    }
    input:invalid {
        outline: 1px solid red;
        border-radius: 5px;
    }
`
export default GlobalStyles
