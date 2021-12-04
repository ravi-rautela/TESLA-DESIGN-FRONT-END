import React, { useState } from 'react'
import styled from 'styled-components'
function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a>
                <img src="./images/logo.svg" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu >
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <img src="/images/more.png" onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <img src="/images/cancel.png" onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cars</a></li>
                <li><a href="#">Super Bikes</a></li>
                <li><a href="#">Truck</a></li>
                <li><a href="#">Exiting Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Soler Powers</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 40px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;

`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 25px;
        flex-wrap: nowrap;

    }
    @media (max-width:768px){
        display:none;
    }

`
const RightMenu = styled.div`
    display: flex;
    align-items:center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right:10px;      
    
    }
    img{
        height:18px;
        width:17px;
        cursor:pointer;       
    }
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    right:0;
    bottom:0;    
    list-style:none;
    background-color:white;
    width:300px;
    padding:20px;
    z-index:10;
    transform: ${props => props.show ? 'translateX(0)' : 'translateY(100%)'};
    transition: transform 0.2s;

    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,.2); 
    }
    a{
        font-weight:600;
    }
    img{
        height:30px;
     
    }
`
const CloseWrapper = styled.div`
    text-align:end;
    cursor:pointer;

`