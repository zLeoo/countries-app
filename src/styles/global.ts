import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }
    body{
        background-color: ${props => props.theme.colors.background};
        
        transition: background-color .3s ease;
    }
    input, select, option, button{
        border: 0;
        outline: none;
    }
`;