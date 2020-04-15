import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #83baf3;
    color: white;
    height: 100vh;
    width: 100%;
`;

const Wrapper = props => {
    return ( 
        <Container>
            {props.children}
        </Container>
    );
}
 
export default Wrapper;