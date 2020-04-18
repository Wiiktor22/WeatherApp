import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 4vh;
    margin: 1vh 0 2vh;
`;

const SectionLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    :nth-of-type(1) {
        margin-right: 5vw;
    }
    &.active {
        border-bottom: 1px solid white;
        padding: 0 2px 1px;
    }
`;

const ReferenceSection = () => {
    return ( 
        <Wrapper>
            <SectionLink to='/'>Dziś</SectionLink>
            <SectionLink to='/nextweek'>Następne 7 dni</SectionLink>
        </Wrapper>
    );
}
 
export default ReferenceSection;