import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Sidebar from '../components/common/Navbar/SideNav';
import { Input, Space } from 'antd';
import CustomInput from '../components/common/Input/CustomInput';
import TuneIcon from '@mui/icons-material/Tune';
import JobCard from "../components/common/Cards/JobsCard"
import AppliedCard from "../components/common/Cards/AppliedCard"
import PreviewModal from "../components/modal/PreviewModal"

const { Search } = Input;

//Sidebar data
const dataCategory = [
    { id: "0", name: "Business development", count: "20" },
    { id: "1", name: "Customer support", count: "10" },
    { id: "2", name: "Design & development", count: "30" },
    { id: "3", name: "Finance", count: "50" },
    { id: "4", name: "Human Resources", count: "50" },
    { id: "5", name: "Marketing", count: "10" },
    { id: "6", name: "Sales", count: "20" },
    { id: "7", name: "Project Management", count: "60" },
    { id: "8", name: "Education / Teaching", count: "120" },
    { id: "9", name: "Information Technology", count: "220" },
    { id: "10", name: "Journalism", count: "320" },
    { id: "11", name: "Health Sector", count: "120" },
    { id: "12", name: "Law", count: "20" },
    { id: "13", name: "Engineering ", count: "220" },
    { id: "14", name: "Civil Service ", count: "320" },
    { id: "15", name: "Makeup Artist", count: "250" },
    { id: "16", name: "Others", count: "20" },
]

const dataType = [
    { id: "0", name: "Full Time", count: "200" },
    { id: "1", name: "Part Time", count: "50" },
    { id: "2", name: "Contract", count: "130" },
    { id: "3", name: "Remote", count: "500" },

]


//Page data
const data = [
    {
        id: "0",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00"

    },
    {
        id: "1",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00"

    },
    {
        id: "2",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00"

    },
    {
        id: "3",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00"

    },
    {
        id: "4",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00"

    },
    {
        id: "5",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00"

    },
    {
        id: "6",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00"

    },
    {
        id: "7",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00"

    },
]

export default function Joblisting() {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [jobList, setJobList] = useState([...data]);
    const [selectedJob, setSelectedJob] = useState({})

    console.log(jobList);

    const toggleModal = (job) => {
        console.log("toggleModal called")
        console.log("job called", job)
        setSelectedJob(job)
        setOpen(!open);
    }

    const styles = {
        searchArea: {
            height: "100px",
            backgroundColor: '#F4F6F6',
            width: "100%",
            borderBottom: "1px solid #AEF6C7",
        }
    }

    const onSearch = value => console.log(value);

    const displayData = () => {
        if (jobList.length > 0) {
            return (
                jobList.map((job, index) => (<AppliedCard key={job.id} toggleModal={toggleModal} job={job} />))

            )
        }
    }

    const submitForm = () => {
        if (email.length === 0 || password.length < 8) toast.error("Password must be at leasst 8 characters")
    }

    return (
        <PageContainer>
            <Sidebar dataCategory={dataCategory} dataType={dataType} />
            <Container>
                <SectionVertical style={styles.searchArea}>
                    {/* <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} bordered={false} /> */}

                    <CustomInput aria-label="Demo input" placeholder="Search Job listing..." />;
                    <CustomInput aria-label="Demo input" placeholder="Search Location." />;
                    <FilterButton><TuneIcon />Filter</FilterButton>
                    <SectionVertical style={{ justifyContent: 'space-between', width: '80px' }}>
                        <ActionButton><TuneIcon /></ActionButton>
                        <ActionButton><TuneIcon /></ActionButton>
                    </SectionVertical>
                </SectionVertical>
                <CardContainer>

                    {/* {jobList.length > 0 ?? jobList.map((job, index) => (<JobCard toggleModal={toggleModal} />))} */}
                    {displayData()}
                    {/* <JobCard toggleModal={toggleModal} />
                    <JobCard toggleModal={toggleModal} />
                    <JobCard toggleModal={toggleModal} /> */}



                </CardContainer>

            </Container>

            <PreviewModal toggleModal={toggleModal} open={open} job={selectedJob} />
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height:100vh;
    justify-content:space-between;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height:100vh;
    justify-content:flex-start;
    align-content: center;
`

const SectionHorizontal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:center;
    margin: 10px;
`

const SectionVertical = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items:center;
    margin: 10px;
    flex-wrap: wrap;
`
const CardContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content:space-around;
    align-content: flex-start;
    align-items: flex-start;
    margin: 10px;
    flex-wrap: wrap;
    gap: 50px 0px;
    overflow: auto;
    padding-top: 30px;

    &::-webkit-scrollbar {
        width: 10px;              
    }

    &::-webkit-scrollbar-track {
        background: #FFFFFF;       
    }

    &::-webkit-scrollbar-thumb {
        background-color: #DFE1E1;    
        border-radius: 20px;       
        
    }
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

const LoginForm = styled.form`

`

const InputField = styled.input`
    margin:10px;
    width: 400px;
    border-radius: 10px;
    height: 50px;
    border: 1px solid grey;

    box-shadow: 1px 1px 5px 0px rgba(217,94,211,0.47);
-webkit-box-shadow: 1px 1px 5px 0px rgba(217,94,211,0.47);
-moz-box-shadow: 1px 1px 5px 0px rgba(217,94,211,0.47);

::placeholder,
::-webkit-input-placeholder {
  color: grey;
  margin-left: 30px;
  font-size: 1.5em;
  padding-left: 50px;

}
:-ms-input-placeholder {
   color: red;
   margin-left: 40px;
   padding-left: 50px;
}
`

const SubmitButton = styled.button`
    width: 400px;
    height: 50px;
    border-radius: 5px;
    border:none;
    color: white;
    font-size: 1.5em;
    background-color: purple;

    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.32);
-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.32);
-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.32);


    &:hover {
box-shadow: 5px 5px 5px 0px rgba(217,94,211,0.47);
-webkit-box-shadow: 5px 5px 5px 0px rgba(217,94,211,0.47);
-moz-box-shadow: 5px 5px 5px 0px rgba(217,94,211,0.47);
    }
`

const FilterButton = styled.button`
    width: 80px;
    border-radius: 15px;
    background-color: white;
    border: none;
    display: flex;
    flex-direction:row;
    justify-content: center;
    padding: 5px;
`

const ActionButton = styled.button`
    border-radius: 5px;
    background-color: white;
    border: none;
    display: flex;
    flex-direction:row;
    justify-content: center;
    padding: 5px;
`