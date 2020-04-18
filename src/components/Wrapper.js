import React from 'react';
import styled from 'styled-components';
import { defineBackgroundColor } from './elements/functions';

const Container = styled.div`
    background-color: ${({ color }) => color};
    color: white;
    height: 100vh;
    width: 100%;
    padding: 2vh 5vw;
    @media (min-width: 1024px) {
        width: 70%;
        margin: 0 auto;
    }
    @media (min-width: 1536px) {
        width: 50%;
        margin: 0 auto;
    }
`;

const Wrapper = props => {
    return ( 
        <Container color={defineBackgroundColor()}>
            {props.children}
        </Container>
    );
}
 
export default Wrapper;