import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                discription="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftButtonText="CUSTOM ORDER"
                rightButtonText="EXITING INVENTORY"
            />
            <Section
                title="Model Y"
                discription="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftButtonText="CUSTOM ORDER"
                rightButtonText="EXITING INVENTORY"
            />
            <Section
                title="Model 3"
                discription="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftButtonText="CUSTOM ORDER"
                rightButtonText="EXITING INVENTORY"
            />
            <Section
                title="Model X"
                discription="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftButtonText="CUSTOM ORDER"
                rightButtonText="EXITING INVENTORY"
            />
            <Section
                title="Lowest Csot Solar Panels in America"
                discription="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn More"
            />

            <Section
                title="Solar For New Roofs"
                discription="Soler Roof Costs Less Then a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn More"

            />
            <Section
                title="Accessories"
                discription=""
                backgroundImg="accessories.jpg"
                leftButtonText="Shop Now"


            />


        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;

`