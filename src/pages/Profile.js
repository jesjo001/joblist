import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';

export default function Profile() {
    return (
        <Container>
            <OverViewArea>
                <Box sx={{
                    backgroundColor: 'white',
                    mt: 4,
                    ml: 4,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '40%',

                }}
                >
                    <Box sx={{
                        mr: 4,
                    }}>
                        <LogoContainer >
                            <ProfilePicture src="https://joeschmoe.io/api/v1/random" />
                        </LogoContainer>
                    </Box>
                    <Box>
                        <NameContainer> Steven Lawrence </NameContainer>
                        <SubTitle> Full Stack Developer </SubTitle>
                        <Rate>$40</Rate>
                    </Box>
                </Box>
                <Box sx={{
                    mr: 4,
                    mt: 4,
                    ml: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',

                }}>
                    <DetailsContainer>
                        <DetailsTitle>Degree</DetailsTitle>
                        <Details>Degree</Details>
                    </DetailsContainer>
                    <DetailsContainer>
                        <DetailsTitle>Location</DetailsTitle>
                        <Details>Degree</Details>
                    </DetailsContainer>
                    <DetailsContainer>
                        <DetailsTitle>Years of experience</DetailsTitle>
                        <Details>Degree</Details>
                    </DetailsContainer>
                    <DetailsContainer>
                        <DetailsTitle>Languages</DetailsTitle>
                        <Details>Degree</Details>
                    </DetailsContainer>
                </Box>
            </OverViewArea>
        </Container>
    );
}



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display :flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    margin-top:20px;
    
`

const OverViewArea = styled.div`
    width :80%;
    height: 200px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: white;
    display:flex;
    flex-direction: row;
`

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 150px;
  margin-top:-10px;
  
`

const ProfilePicture = styled.img`
    display: flex;
    flex-direction: column;
    width: 100px;
    justify-content: center;
    align-items: center;
    margin:0px;
    border-radius: 35px;
`

const NameContainer = styled.h3`
    display:flex;
    justify-content: flex-start;
    font-size: 1.5em;
    margin-bottom:0px;
`
const SubTitle = styled.h5`
    display:flex;
    justify-content: flex-start;
    font-weight:600;
    color: grey;
    font-style:bold;
    font-size: 1.0em;
    margin-top:0px;
    margin-bottom:0px;
`

const Rate = styled.h4`
    display:flex;
    justify-content: flex-start;
    margin-b
`
const DetailsContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left:40px;
`

const DetailsTitle = styled.h3`
    display:flex;
    justify-content: flex-start;
    font-size: 1em;
    margin-bottom:0px;
    font-style: bolder;
    font-weight:600;
    margin-right:10px;
`
const Details = styled.h3`
    display:flex;
    justify-content: flex-start;
    font-size: 1em;
    margin-bottom:8px;
    margin-left:20px;
`