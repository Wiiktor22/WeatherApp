import React from 'react';
import styled, { css } from 'styled-components';
import Refresh from './../../assets/refresh.svg';
import BackIcon from './../../assets/back.png';
import { useLocation, useHistory } from 'react-router-dom';

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

    ${({ left }) => (
        left && css`
            light: 0;
            right: auto;
        `
    )}
`;

const Header = () => {
    let location = useLocation();
    let history = useHistory();
    const handleRefresh = () => {
        switch (location.pathname) {
            case '/': 
                return window.location.reload()
            case '/nextweek':
                return history.push('/')
            default:
                return
        }
    }
    
    return ( 
        <Wrapper>
            {location.pathname === '/nextweek' && <RefreshIcon left src={BackIcon} onClick={() => history.push('/')}/>}
            <Title>Pogoda</Title>
            <RefreshIcon src={Refresh} onClick={handleRefresh}/>
        </Wrapper>
    );
}
 
export default Header;