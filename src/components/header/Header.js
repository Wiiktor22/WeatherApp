import React from 'react';
import styled from 'styled-components';
import Burger from '../elements/burger/Burger';
import Refresh from './../../assets/refresh.svg';

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

const RefreshIcon = styled.img`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
`;

const Header = () => {
    return ( 
        <Wrapper>
            <Burger />
            <Title>Pogoda</Title>
            <RefreshIcon src={Refresh} onClick={() => window.location.reload()}/>
        </Wrapper>
    );
}
 
export default Header;