import React from 'react';
import styled from 'styled-components';

const BurgerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 10vw;
`;

const Item = styled.div`
    height: 4px;
    width: ${({ width }) => width};
    background-color: white;
    margin-bottom: 4px;
    border-radius: 20px;
`;

const Burger = () => {
    return ( 
        <BurgerWrapper>
            <Item width={'30px'}/>
            <Item width={'20px'}/>
            <Item width={'25px'}/>
        </BurgerWrapper>
    );
}
 
export default Burger;