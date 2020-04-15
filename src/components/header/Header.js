import React from 'react';
import styled from 'styled-components';
import Burger from '../elements/burger/Burger';

const Wrapper = styled.header`
    position: relative;
    height: 5vh;
    width: 100%;
`;

const Title = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.7rem;
    margin: 0 auto;
    font-weight: 300;
`;

const Header = () => {
    return ( 
        <Wrapper>
            <Burger />
            <Title>Pogoda</Title>
        </Wrapper>
    );
}
 
export default Header;