import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Modal from '@mui/material/Modal';
import styled from "styled-components";

const style = {
    modalBody: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        height: 800,
        boxShadow: 24,
        p: 4,
        borderRadius: 6,
        overflow: 'auto',
        ':-webkit-scrollbar': {
            width: 8,
            borderRadius: 16,
            backgroundColor: 'grey',

        },
        ':-webkit-scrollbar-track': {
            width: 8,
            borderRadius: 16,
            backgroundColor: 'grey',
        }
    },
    head: {
    }


};



export default function AppliedModal({ toggleModal, open, job }) {

    return (
        <div >

            <Modal
                open={open}
                onClose={toggleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Container >
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2>{job.title}</h2> <h5>$90,000 per annum </h5>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                        <h3 style={{ color: 'grey' }}>Company info </h3>
                        {job.body}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                        <h3 style={{ color: 'grey' }}>Job Description </h3>
                        {job.fullDescription}
                    </Typography>

                    <Box sx={{
                        backgroundColor: 'white',
                        mt: 4,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        {/* <Button variant="outlined" >Cancel</Button>
                        <Button variant="contained" color="success" endIcon={<SendIcon />} >Apply</Button> */}
                    </Box>

                </Container>
            </Modal>
        </div >
    );
}


const Container = styled(Box)`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 800px;
        background-color: white;
        border: 2px solid #000;
        height: 800px;
        box-shadow: 24px;
        padding: 20px;
        border-radius: 16px;
        overflow: scroll;

::-webkit-scrollbar{
    width:6px;
    border-left:1px solid #E6ECF8;
}
::-webkit-scrollbar-thumb{
    background-color: skyblue;
}
`