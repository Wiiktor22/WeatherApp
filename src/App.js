import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Wrapper from './components/Wrapper';
import Header from './components/header/Header';
import Main from './components/views/main/Main';
import GeoLocationContextProvider from './context/GeoLocationContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Next from './components/views/next/Next';
import DataForNextSectionProvider from './context/DataForNextSectionContext';
import { defineBackgroundColor } from './components/elements/functions';
import Footer from './components/footer/Footer';

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
        background-color: ${({ color }) => color};
        height: 100%;
        overflow: auto;
        position: relative;
    }
`;

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}> 
            <GlobalStyle color={defineBackgroundColor()}/>
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
                <Footer />
            </Wrapper>
        </BrowserRouter>
    );
}
 
export default App;