import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 100%;
`;

const Item = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
`;

const InsideItem = styled.div`
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    :nth-of-type(2) {
        animation-delay: -0.5s;
    }
    @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }
`;

const Text = styled.p`
    margin-top: 3vh;
    font-size: 1.4rem;
    font-weight: 300;
`;

const Loading = () => {
    return ( 
        <Wrapper>
            <Item>
                <InsideItem />
                <InsideItem />
            </Item>
            <Text>Pobieram pogodę dla Ciebie...</Text>
        </Wrapper>
    );
}
 
export default Loading;