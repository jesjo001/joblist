import React from 'react'
import styled from 'styled-components'

export default function UserInfo() {
    return (
        <MainContainer>

            <SideContainer>
                <h5> Github </h5>
                <h5> Github </h5>
                <h5> Github </h5>
            </SideContainer>
            <Container>


            </Container>
            
        </MainContainer>
    )
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    width: 70vw;
    height: 70vh;
`
const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    width: 20vw;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    width:80vw;
    background-color: white;
`