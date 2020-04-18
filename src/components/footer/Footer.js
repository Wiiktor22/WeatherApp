import React from 'react';
import styled from 'styled-components';

const Author = styled.p`
    position: absolute;
    bottom: 2vh;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    font-weight: 200;
`;

const Footer = () => {
    const date = new window.Date();
    return ( 
        <Author>
            Wiktor Szlegier © {date.getFullYear()}
        </Author>
    );
}
 
export default Footer;