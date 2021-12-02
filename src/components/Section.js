import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
        <Wrap>

            <TestItem>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery.</p>
            </TestItem>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Exiting Inventory
                </RightButton>
            </ButtonGroup>
        </Wrap>
    )
}

export default Section
const Wrap = styled.div`
    width:100vw;
    height :100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
const TestItem = styled.div`
    padding-top: 18vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px; 
  
   
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    color: white;
    height: 40px;
    width: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin-left:24px;

`
const RightButton = styled(LeftButton)`

`