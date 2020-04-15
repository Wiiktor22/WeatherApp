import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${({ color }) => color};
    color: white;
    height: 100vh;
    width: 100%;
    padding: 2vh 5vw;
`;

const Wrapper = props => {
    const date = new Date();
    const defineBackgroundColor = () => {
        if (date.getHours() >= 7 && date.getHours() <= 20) {
            return '#83baf3';
        } else {
            return '#1E1D45';
        }
    }
    
    return ( 
        <Container color={defineBackgroundColor()}>
            {props.children}
        </Container>
    );
}
 
export default Wrapper;