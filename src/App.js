import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Wrapper from './components/Wrapper';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
    }
`;

const App = () => {
    const date = new Date();
    
    return (
        <> 
            <GlobalStyle />
            <Wrapper>
                <h1>Siema!</h1>
            </Wrapper>
        </>
    );
}
 
export default App;