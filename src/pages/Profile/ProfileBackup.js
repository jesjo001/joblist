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

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Profile() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
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
                <Box sx={{  width: '80vw', borderRadius:'25px', }}>
                    <AppBar position="static" style={{ borderRadius: `20px 20px 0px 0px`}}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Profile" {...a11yProps(0)} />
                            <Tab label="Resume" {...a11yProps(1)} />
                            <Tab label="Experience / Work History" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <UserInfo />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            Item Three
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </div>
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