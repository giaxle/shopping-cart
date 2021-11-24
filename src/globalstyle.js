import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
        line-height: 1.6;
        /* Footer support */
        position: relative;
        min-height: 100%;
    }

    body {
        background-color: #f9d523;
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        /* Footer support */
        margin-bottom: 5.2rem;
    }
    
`

export default GlobalStyle;