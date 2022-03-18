import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import UserInfo from './UserInfo';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function Profile() {
    const theme = useTheme();
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const addSkill = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

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
                    backgroundColor:' #0076EC',

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
                        <Details>Computer Science</Details>
                    </DetailsContainer>
                    <DetailsContainer>
                        <DetailsTitle>Location</DetailsTitle>
                        <Details>Los Angelis</Details>
                    </DetailsContainer>
                    <DetailsContainer>
                        <DetailsTitle>Years of experience</DetailsTitle>
                        <Details>5 Years</Details>
                    </DetailsContainer>
                    <DetailsContainer>
                        <DetailsTitle>Languages</DetailsTitle>
                        <Details>English, Yoruba</Details>
                    </DetailsContainer>
                </Box>
            </OverViewArea>

            <div>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                        style={{ borderColor: "grey", borderBottom: '1px solid'}}
                    >
                        <Tab value="one" label="Item One" />
                        <Tab value="two" label="Item Two" />
                        <Tab value="three" label="Item Three" />
                    </Tabs>
                </Box>
                <Box sx={{  width: '80vw', borderRadius:'25px', mt: 4 }}>
                    <MainContent>
                        <ContentNav>

                            <NavSection>
                                <LinkSection>
                                    <LanguageIcon />
                                    <LinkTitle>Website </LinkTitle>
                                </LinkSection>
                                <LinkSection>
                                    <LinkedInIcon />
                                    <LinkTitle>LinkedIn</LinkTitle>
                                </LinkSection>
                                <LinkSection>
                                    <GitHubIcon />
                                    <LinkTitle>GitHub</LinkTitle>
                                </LinkSection>
                                <LinkSection>
                                    <YouTubeIcon />
                                    <LinkTitle>Youtube</LinkTitle>
                                </LinkSection>
                                
                                
                            </NavSection>

                            <NavSection>
                                <LinkSection>
                                    <AccountBalanceWalletIcon />
                                    <LinkTitle>Portfolio</LinkTitle>
                                </LinkSection>
                                <LinkSection>
                                    <YouTubeIcon />
                                    <LinkTitle>Youtube</LinkTitle>
                                </LinkSection>
                                
                            </NavSection>

                            <NavSection >
                                <LinkTitle>Skills</LinkTitle>
                                <SkillSection>
                                    <Stack direction="row" spacing={1}>
                                        <Chip label="Click to add a Skill " onClick={addSkill} />
                                    </Stack>
                                    <Stack direction="row" spacing={1} style={{ maxWidth: '220px', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', alignContent: 'space-around'}}>
                                        
                                        <Chip label="Node" style={{ maxWidth: '100px' }} variant="outlined" onDelete={handleDelete} />
                                        <Chip label="Meteor JS" style={{ maxWidth: '100px' }} variant="outlined" onDelete={handleDelete} />
                                        <Chip label="Chip Outlined" style={{ maxWidth: '100px' }} variant="outlined" onDelete={handleDelete} />
                                    </Stack>
                                </SkillSection>

                            </NavSection>

                            
                        </ContentNav>
                        <ContentArea>
                            <h3>Hello World</h3>
                        </ContentArea>
                    </MainContent>
                </Box>
            </div>
        </Container>
    )
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
    background-color: #0076EC;
    display:flex;
    flex-direction: row;
    border-radius: 20px;
    
`

const ReviewArea = styled.div`
    width :80%;
    height: 800px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #0076EC;
    display:flex;
    flex-direction: row;
    border-radius: 20px;
    
`

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 150px;
  margin-top:-10px;
  background-color:#0076EC;
  
`

const ProfilePicture = styled.img`
    display: flex;
    flex-direction: column;
    width: 100px;
    justify-content: center;
    align-items: center;
    margin:0px;
    border-radius: 50px;
    
`

const NameContainer = styled.h3`
    display:flex;
    justify-content: flex-start;
    font-size: 1.5em;
    margin-bottom:0px;
    color:white;
    font-style: bolder;
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
    color: #80BFFF;
`

const Rate = styled.h4`
    display:flex;
    justify-content: flex-start;
    color:white;
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
    color:white;
`
const Details = styled.h3`
    display:flex;
    justify-content: flex-start;
    font-size: 1em;
    margin-bottom:8px;
    margin-left:20px;
    font-style: normal;
    font-weight: bold;
    color: #80BFFF;
`

const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ContentArea = styled.div`
    background-color: white;
    width: 55vw;
    border-radius: 20px;

    @media (max-width: 768px) {
        width: 50vw;
    }

    @media (max-width: 2560px) {
        width: 60vw;
    }
`;

const ContentNav = styled.div`
    width: 20vw;
    border-radius: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 25vw;
    }

    @media (max-width: 2560px) {
        width: 15vw;
    }
`;

const NavSection = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
`;


const LinkSection = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding-top: 10px;
    color: #B0B4B9;
`

const LinkTitle = styled.h5`
    padding-left:10px;
    font-weight: bold;
    color: #B0B4B9;
`

const SkillSection = styled.h5`
    padding-left:10px;
    font-weight: bold;
    color: #B0B4B9;
    
`
const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;