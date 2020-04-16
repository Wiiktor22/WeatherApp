import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 4vh;
    margin: 1vh 0 2vh;
`;

const SectionLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    :nth-of-type(1) {
        margin-right: 5vw;
    }
`;

const ReferenceSection = () => {
    return ( 
        <Wrapper>
            <SectionLink>Dziś</SectionLink>
            <SectionLink>Następne 7 dni</SectionLink>
        </Wrapper>
    );
}
 
export default ReferenceSection;