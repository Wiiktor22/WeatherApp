import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Wrapper from './components/Wrapper';
import Header from './components/header/Header';
import Main from './components/views/main/Main';
import GeoLocationContextProvider from './context/GeoLocationContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Next from './components/views/next/Next';
import DataForNextSectionProvider from './context/DataForNextSectionContext';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
        height: 100%;
        overflow: hidden;
        position: fixed;
        width: 100%;
    }

    body {
        background-color: #83baf3;
        height: 100%;
        overflow: auto;
        position: relative;
    }
`;

const App = () => {
    return (
        <BrowserRouter> 
            <GlobalStyle />
            <Wrapper>
                <Header />
                <GeoLocationContextProvider>
                    <DataForNextSectionProvider>
                        <Switch>
                            <Route exact path='/' component={Main} />
                            <Route path='/nextweek' component={Next} />
                        </Switch>
                    </DataForNextSectionProvider>
                </GeoLocationContextProvider>
            </Wrapper>
        </BrowserRouter>
    );
}
 
export default App;