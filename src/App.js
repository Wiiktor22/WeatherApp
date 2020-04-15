import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Wrapper from './components/Wrapper';
import Header from './components/header/Header';
import Main from './components/views/main/Main';

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
                <Header />
                <Main />
            </Wrapper>
        </>
    );
}
 
export default App;