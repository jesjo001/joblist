import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Sidebar from '../components/common/Navbar/SideNav';
import { Input, Space } from 'antd';
import CustomInput from '../components/common/Input/CustomInput';
import TuneIcon from '@mui/icons-material/Tune';
import JobCard from "../components/common/Cards/JobsCard";
import AppliedCard from "../components/common/Cards/AppliedCard";
import PreviewModal from "../components/modal/PreviewModal";
import AppliedModal from "../components/modal/ApliedModal";

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
        dateApplied: "12th December 2021 18:00",
        fullDescription: `Rutrum sit vel et portaest ipsum molestie magna bibendum magna nisl facilisis eu facilisis fusce maximus quam diam quisque leo condimentum magna tincidunt enim phasellus lacus metus placerat tristique quis rutrum hendrerit leo maecenas bibendum bibendum commodo facilisis lacus consectetur lorem condimentum lacus dolor maximus a sit urna accumsan dolor interdum hendrerit tortor eget orci pellentesque urna tristique consectetur urna elementum tristique eros ac placerat maecenas eros cursus scelerisque interdum lacus tempus dolor nec gravida lorem diam quis adipiscing elit commodo gravida dolor amet quis phasellus proin ipsum purus quam leo orci interdum maximus hendrerit ac quis nec vivamus ipsum.
            Tristique sed nec molestie fusce a gravida tempus bibendum commodo molestie rutrum amet facilisis varius portaest orci ex mi molestie eros et enim arcu purus ipsum quis ac tincidunt pellentesque lacus felis quam enim fusce mi cursus condimentum nec rutrum cursus elementum felis ut condimentum leo sem vivamus accumsan nunc aliquam enim elementum nisl orci pellentesque tortor commodo nisi tempus fusce lorem nec eros eros ac nisi purus enim eu fusce hendrerit adipiscing maecenas nunc ipsum suspendisse sollicitudin sit ipsum dolor accumsan hendrerit vel facilisis elementum euismod nisl nisi eros phasellus sollicitudin ipsum maecenas adipiscing varius vivamus molestie nisl lorem.
            Tempus lacus quam gravida tincidunt bibendum varius et eros mi molestie nec consectetur condimentum quam tincidunt nisi quam nulla fusce sit eros quam tempus pellentesque scelerisque pellentesque accumsan bibendum morbi nisl quam tempus metus pellentesque et nunc lorem maximus ipsum sem sit maecenas hendrerit felis morbi lacus a ac tincidunt ut aliquam tempus phasellus urna felis erat quisque sollicitudin suspendisse sed urna rutrum et tempus lorem enim elit congue maximus nisl sollicitudin sit et accumsan quisque interdum maximus consectetur vel tortor nunc diam felis nisi accumsan maximus urna purus felis sed tortor aliquam phasellus massa adipiscing interdum eu congue condimentum.
            Elementum placerat enim pellentesque nec commodo ex maximus facilisis commodo scelerisque leo arcu bibendum vel tristique fusce eu scelerisque morbi adipiscing eget lorem sit massa sed sed eu pellentesque aliquam commodo morbi ac lacus elementum cursus ut rutrum maecenas magna condimentum lacus congue elit scelerisque hendrerit lacus mi tortor phasellus scelerisque adipiscing vel ipsum sollicitudin maximus ac proin pellentesque vivamus nulla metus quis accumsan cursus purus felis hendrerit sed diam eget sed accumsan vel bibendum lorem ut tortor adipiscing orci dolor pellentesque leo sollicitudin morbi varius metus felis congue nec amet tortor aliquam morbi nec varius mi orci bibendum scelerisque.`


    },
    {
        id: "1",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00",
        fullDescription: `Rutrum sit vel et portaest ipsum molestie magna bibendum magna nisl facilisis eu facilisis fusce maximus quam diam quisque leo condimentum magna tincidunt enim phasellus lacus metus placerat tristique quis rutrum hendrerit leo maecenas bibendum bibendum commodo facilisis lacus consectetur lorem condimentum lacus dolor maximus a sit urna accumsan dolor interdum hendrerit tortor eget orci pellentesque urna tristique consectetur urna elementum tristique eros ac placerat maecenas eros cursus scelerisque interdum lacus tempus dolor nec gravida lorem diam quis adipiscing elit commodo gravida dolor amet quis phasellus proin ipsum purus quam leo orci interdum maximus hendrerit ac quis nec vivamus ipsum.
            Tristique sed nec molestie fusce a gravida tempus bibendum commodo molestie rutrum amet facilisis varius portaest orci ex mi molestie eros et enim arcu purus ipsum quis ac tincidunt pellentesque lacus felis quam enim fusce mi cursus condimentum nec rutrum cursus elementum felis ut condimentum leo sem vivamus accumsan nunc aliquam enim elementum nisl orci pellentesque tortor commodo nisi tempus fusce lorem nec eros eros ac nisi purus enim eu fusce hendrerit adipiscing maecenas nunc ipsum suspendisse sollicitudin sit ipsum dolor accumsan hendrerit vel facilisis elementum euismod nisl nisi eros phasellus sollicitudin ipsum maecenas adipiscing varius vivamus molestie nisl lorem.
            Tempus lacus quam gravida tincidunt bibendum varius et eros mi molestie nec consectetur condimentum quam tincidunt nisi quam nulla fusce sit eros quam tempus pellentesque scelerisque pellentesque accumsan bibendum morbi nisl quam tempus metus pellentesque et nunc lorem maximus ipsum sem sit maecenas hendrerit felis morbi lacus a ac tincidunt ut aliquam tempus phasellus urna felis erat quisque sollicitudin suspendisse sed urna rutrum et tempus lorem enim elit congue maximus nisl sollicitudin sit et accumsan quisque interdum maximus consectetur vel tortor nunc diam felis nisi accumsan maximus urna purus felis sed tortor aliquam phasellus massa adipiscing interdum eu congue condimentum.
            Elementum placerat enim pellentesque nec commodo ex maximus facilisis commodo scelerisque leo arcu bibendum vel tristique fusce eu scelerisque morbi adipiscing eget lorem sit massa sed sed eu pellentesque aliquam commodo morbi ac lacus elementum cursus ut rutrum maecenas magna condimentum lacus congue elit scelerisque hendrerit lacus mi tortor phasellus scelerisque adipiscing vel ipsum sollicitudin maximus ac proin pellentesque vivamus nulla metus quis accumsan cursus purus felis hendrerit sed diam eget sed accumsan vel bibendum lorem ut tortor adipiscing orci dolor pellentesque leo sollicitudin morbi varius metus felis congue nec amet tortor aliquam morbi nec varius mi orci bibendum scelerisque.`


    },
    {
        id: "2",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00",
        fullDescription: `Rutrum sit vel et portaest ipsum molestie magna bibendum magna nisl facilisis eu facilisis fusce maximus quam diam quisque leo condimentum magna tincidunt enim phasellus lacus metus placerat tristique quis rutrum hendrerit leo maecenas bibendum bibendum commodo facilisis lacus consectetur lorem condimentum lacus dolor maximus a sit urna accumsan dolor interdum hendrerit tortor eget orci pellentesque urna tristique consectetur urna elementum tristique eros ac placerat maecenas eros cursus scelerisque interdum lacus tempus dolor nec gravida lorem diam quis adipiscing elit commodo gravida dolor amet quis phasellus proin ipsum purus quam leo orci interdum maximus hendrerit ac quis nec vivamus ipsum.
            Tristique sed nec molestie fusce a gravida tempus bibendum commodo molestie rutrum amet facilisis varius portaest orci ex mi molestie eros et enim arcu purus ipsum quis ac tincidunt pellentesque lacus felis quam enim fusce mi cursus condimentum nec rutrum cursus elementum felis ut condimentum leo sem vivamus accumsan nunc aliquam enim elementum nisl orci pellentesque tortor commodo nisi tempus fusce lorem nec eros eros ac nisi purus enim eu fusce hendrerit adipiscing maecenas nunc ipsum suspendisse sollicitudin sit ipsum dolor accumsan hendrerit vel facilisis elementum euismod nisl nisi eros phasellus sollicitudin ipsum maecenas adipiscing varius vivamus molestie nisl lorem.
            Tempus lacus quam gravida tincidunt bibendum varius et eros mi molestie nec consectetur condimentum quam tincidunt nisi quam nulla fusce sit eros quam tempus pellentesque scelerisque pellentesque accumsan bibendum morbi nisl quam tempus metus pellentesque et nunc lorem maximus ipsum sem sit maecenas hendrerit felis morbi lacus a ac tincidunt ut aliquam tempus phasellus urna felis erat quisque sollicitudin suspendisse sed urna rutrum et tempus lorem enim elit congue maximus nisl sollicitudin sit et accumsan quisque interdum maximus consectetur vel tortor nunc diam felis nisi accumsan maximus urna purus felis sed tortor aliquam phasellus massa adipiscing interdum eu congue condimentum.
            Elementum placerat enim pellentesque nec commodo ex maximus facilisis commodo scelerisque leo arcu bibendum vel tristique fusce eu scelerisque morbi adipiscing eget lorem sit massa sed sed eu pellentesque aliquam commodo morbi ac lacus elementum cursus ut rutrum maecenas magna condimentum lacus congue elit scelerisque hendrerit lacus mi tortor phasellus scelerisque adipiscing vel ipsum sollicitudin maximus ac proin pellentesque vivamus nulla metus quis accumsan cursus purus felis hendrerit sed diam eget sed accumsan vel bibendum lorem ut tortor adipiscing orci dolor pellentesque leo sollicitudin morbi varius metus felis congue nec amet tortor aliquam morbi nec varius mi orci bibendum scelerisque.`


    },
    {
        id: "3",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00",
        fullDescription: `Rutrum sit vel et portaest ipsum molestie magna bibendum magna nisl facilisis eu facilisis fusce maximus quam diam quisque leo condimentum magna tincidunt enim phasellus lacus metus placerat tristique quis rutrum hendrerit leo maecenas bibendum bibendum commodo facilisis lacus consectetur lorem condimentum lacus dolor maximus a sit urna accumsan dolor interdum hendrerit tortor eget orci pellentesque urna tristique consectetur urna elementum tristique eros ac placerat maecenas eros cursus scelerisque interdum lacus tempus dolor nec gravida lorem diam quis adipiscing elit commodo gravida dolor amet quis phasellus proin ipsum purus quam leo orci interdum maximus hendrerit ac quis nec vivamus ipsum.
            Tristique sed nec molestie fusce a gravida tempus bibendum commodo molestie rutrum amet facilisis varius portaest orci ex mi molestie eros et enim arcu purus ipsum quis ac tincidunt pellentesque lacus felis quam enim fusce mi cursus condimentum nec rutrum cursus elementum felis ut condimentum leo sem vivamus accumsan nunc aliquam enim elementum nisl orci pellentesque tortor commodo nisi tempus fusce lorem nec eros eros ac nisi purus enim eu fusce hendrerit adipiscing maecenas nunc ipsum suspendisse sollicitudin sit ipsum dolor accumsan hendrerit vel facilisis elementum euismod nisl nisi eros phasellus sollicitudin ipsum maecenas adipiscing varius vivamus molestie nisl lorem.
            Tempus lacus quam gravida tincidunt bibendum varius et eros mi molestie nec consectetur condimentum quam tincidunt nisi quam nulla fusce sit eros quam tempus pellentesque scelerisque pellentesque accumsan bibendum morbi nisl quam tempus metus pellentesque et nunc lorem maximus ipsum sem sit maecenas hendrerit felis morbi lacus a ac tincidunt ut aliquam tempus phasellus urna felis erat quisque sollicitudin suspendisse sed urna rutrum et tempus lorem enim elit congue maximus nisl sollicitudin sit et accumsan quisque interdum maximus consectetur vel tortor nunc diam felis nisi accumsan maximus urna purus felis sed tortor aliquam phasellus massa adipiscing interdum eu congue condimentum.
            Elementum placerat enim pellentesque nec commodo ex maximus facilisis commodo scelerisque leo arcu bibendum vel tristique fusce eu scelerisque morbi adipiscing eget lorem sit massa sed sed eu pellentesque aliquam commodo morbi ac lacus elementum cursus ut rutrum maecenas magna condimentum lacus congue elit scelerisque hendrerit lacus mi tortor phasellus scelerisque adipiscing vel ipsum sollicitudin maximus ac proin pellentesque vivamus nulla metus quis accumsan cursus purus felis hendrerit sed diam eget sed accumsan vel bibendum lorem ut tortor adipiscing orci dolor pellentesque leo sollicitudin morbi varius metus felis congue nec amet tortor aliquam morbi nec varius mi orci bibendum scelerisque.`



    },
    {
        id: "4",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00",
        fullDescription: `Rutrum sit vel et portaest ipsum molestie magna bibendum magna nisl facilisis eu facilisis fusce maximus quam diam quisque leo condimentum magna tincidunt enim phasellus lacus metus placerat tristique quis rutrum hendrerit leo maecenas bibendum bibendum commodo facilisis lacus consectetur lorem condimentum lacus dolor maximus a sit urna accumsan dolor interdum hendrerit tortor eget orci pellentesque urna tristique consectetur urna elementum tristique eros ac placerat maecenas eros cursus scelerisque interdum lacus tempus dolor nec gravida lorem diam quis adipiscing elit commodo gravida dolor amet quis phasellus proin ipsum purus quam leo orci interdum maximus hendrerit ac quis nec vivamus ipsum.
            Tristique sed nec molestie fusce a gravida tempus bibendum commodo molestie rutrum amet facilisis varius portaest orci ex mi molestie eros et enim arcu purus ipsum quis ac tincidunt pellentesque lacus felis quam enim fusce mi cursus condimentum nec rutrum cursus elementum felis ut condimentum leo sem vivamus accumsan nunc aliquam enim elementum nisl orci pellentesque tortor commodo nisi tempus fusce lorem nec eros eros ac nisi purus enim eu fusce hendrerit adipiscing maecenas nunc ipsum suspendisse sollicitudin sit ipsum dolor accumsan hendrerit vel facilisis elementum euismod nisl nisi eros phasellus sollicitudin ipsum maecenas adipiscing varius vivamus molestie nisl lorem.
            Tempus lacus quam gravida tincidunt bibendum varius et eros mi molestie nec consectetur condimentum quam tincidunt nisi quam nulla fusce sit eros quam tempus pellentesque scelerisque pellentesque accumsan bibendum morbi nisl quam tempus metus pellentesque et nunc lorem maximus ipsum sem sit maecenas hendrerit felis morbi lacus a ac tincidunt ut aliquam tempus phasellus urna felis erat quisque sollicitudin suspendisse sed urna rutrum et tempus lorem enim elit congue maximus nisl sollicitudin sit et accumsan quisque interdum maximus consectetur vel tortor nunc diam felis nisi accumsan maximus urna purus felis sed tortor aliquam phasellus massa adipiscing interdum eu congue condimentum.
            Elementum placerat enim pellentesque nec commodo ex maximus facilisis commodo scelerisque leo arcu bibendum vel tristique fusce eu scelerisque morbi adipiscing eget lorem sit massa sed sed eu pellentesque aliquam commodo morbi ac lacus elementum cursus ut rutrum maecenas magna condimentum lacus congue elit scelerisque hendrerit lacus mi tortor phasellus scelerisque adipiscing vel ipsum sollicitudin maximus ac proin pellentesque vivamus nulla metus quis accumsan cursus purus felis hendrerit sed diam eget sed accumsan vel bibendum lorem ut tortor adipiscing orci dolor pellentesque leo sollicitudin morbi varius metus felis congue nec amet tortor aliquam morbi nec varius mi orci bibendum scelerisque.`


    },
    {
        id: "5",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00",
        fullDescription: `Rutrum sit vel et portaest ipsum molestie magna bibendum magna nisl facilisis eu facilisis fusce maximus quam diam quisque leo condimentum magna tincidunt enim phasellus lacus metus placerat tristique quis rutrum hendrerit leo maecenas bibendum bibendum commodo facilisis lacus consectetur lorem condimentum lacus dolor maximus a sit urna accumsan dolor interdum hendrerit tortor eget orci pellentesque urna tristique consectetur urna elementum tristique eros ac placerat maecenas eros cursus scelerisque interdum lacus tempus dolor nec gravida lorem diam quis adipiscing elit commodo gravida dolor amet quis phasellus proin ipsum purus quam leo orci interdum maximus hendrerit ac quis nec vivamus ipsum.
            Tristique sed nec molestie fusce a gravida tempus bibendum commodo molestie rutrum amet facilisis varius portaest orci ex mi molestie eros et enim arcu purus ipsum quis ac tincidunt pellentesque lacus felis quam enim fusce mi cursus condimentum nec rutrum cursus elementum felis ut condimentum leo sem vivamus accumsan nunc aliquam enim elementum nisl orci pellentesque tortor commodo nisi tempus fusce lorem nec eros eros ac nisi purus enim eu fusce hendrerit adipiscing maecenas nunc ipsum suspendisse sollicitudin sit ipsum dolor accumsan hendrerit vel facilisis elementum euismod nisl nisi eros phasellus sollicitudin ipsum maecenas adipiscing varius vivamus molestie nisl lorem.
            Tempus lacus quam gravida tincidunt bibendum varius et eros mi molestie nec consectetur condimentum quam tincidunt nisi quam nulla fusce sit eros quam tempus pellentesque scelerisque pellentesque accumsan bibendum morbi nisl quam tempus metus pellentesque et nunc lorem maximus ipsum sem sit maecenas hendrerit felis morbi lacus a ac tincidunt ut aliquam tempus phasellus urna felis erat quisque sollicitudin suspendisse sed urna rutrum et tempus lorem enim elit congue maximus nisl sollicitudin sit et accumsan quisque interdum maximus consectetur vel tortor nunc diam felis nisi accumsan maximus urna purus felis sed tortor aliquam phasellus massa adipiscing interdum eu congue condimentum.
            Elementum placerat enim pellentesque nec commodo ex maximus facilisis commodo scelerisque leo arcu bibendum vel tristique fusce eu scelerisque morbi adipiscing eget lorem sit massa sed sed eu pellentesque aliquam commodo morbi ac lacus elementum cursus ut rutrum maecenas magna condimentum lacus congue elit scelerisque hendrerit lacus mi tortor phasellus scelerisque adipiscing vel ipsum sollicitudin maximus ac proin pellentesque vivamus nulla metus quis accumsan cursus purus felis hendrerit sed diam eget sed accumsan vel bibendum lorem ut tortor adipiscing orci dolor pellentesque leo sollicitudin morbi varius metus felis congue nec amet tortor aliquam morbi nec varius mi orci bibendum scelerisque.`


    },
    {
        id: "6",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00",
        fullDescription: `Rutrum sit vel et portaest ipsum molestie magna bibendum magna nisl facilisis eu facilisis fusce maximus quam diam quisque leo condimentum magna tincidunt enim phasellus lacus metus placerat tristique quis rutrum hendrerit leo maecenas bibendum bibendum commodo facilisis lacus consectetur lorem condimentum lacus dolor maximus a sit urna accumsan dolor interdum hendrerit tortor eget orci pellentesque urna tristique consectetur urna elementum tristique eros ac placerat maecenas eros cursus scelerisque interdum lacus tempus dolor nec gravida lorem diam quis adipiscing elit commodo gravida dolor amet quis phasellus proin ipsum purus quam leo orci interdum maximus hendrerit ac quis nec vivamus ipsum.
            Tristique sed nec molestie fusce a gravida tempus bibendum commodo molestie rutrum amet facilisis varius portaest orci ex mi molestie eros et enim arcu purus ipsum quis ac tincidunt pellentesque lacus felis quam enim fusce mi cursus condimentum nec rutrum cursus elementum felis ut condimentum leo sem vivamus accumsan nunc aliquam enim elementum nisl orci pellentesque tortor commodo nisi tempus fusce lorem nec eros eros ac nisi purus enim eu fusce hendrerit adipiscing maecenas nunc ipsum suspendisse sollicitudin sit ipsum dolor accumsan hendrerit vel facilisis elementum euismod nisl nisi eros phasellus sollicitudin ipsum maecenas adipiscing varius vivamus molestie nisl lorem.
            Tempus lacus quam gravida tincidunt bibendum varius et eros mi molestie nec consectetur condimentum quam tincidunt nisi quam nulla fusce sit eros quam tempus pellentesque scelerisque pellentesque accumsan bibendum morbi nisl quam tempus metus pellentesque et nunc lorem maximus ipsum sem sit maecenas hendrerit felis morbi lacus a ac tincidunt ut aliquam tempus phasellus urna felis erat quisque sollicitudin suspendisse sed urna rutrum et tempus lorem enim elit congue maximus nisl sollicitudin sit et accumsan quisque interdum maximus consectetur vel tortor nunc diam felis nisi accumsan maximus urna purus felis sed tortor aliquam phasellus massa adipiscing interdum eu congue condimentum.
            Elementum placerat enim pellentesque nec commodo ex maximus facilisis commodo scelerisque leo arcu bibendum vel tristique fusce eu scelerisque morbi adipiscing eget lorem sit massa sed sed eu pellentesque aliquam commodo morbi ac lacus elementum cursus ut rutrum maecenas magna condimentum lacus congue elit scelerisque hendrerit lacus mi tortor phasellus scelerisque adipiscing vel ipsum sollicitudin maximus ac proin pellentesque vivamus nulla metus quis accumsan cursus purus felis hendrerit sed diam eget sed accumsan vel bibendum lorem ut tortor adipiscing orci dolor pellentesque leo sollicitudin morbi varius metus felis congue nec amet tortor aliquam morbi nec varius mi orci bibendum scelerisque.`


    },
    {
        id: "7",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`,
        dateApplied: "12th December 2021 18:00",
        fullDescription: `Rutrum sit vel et portaest ipsum molestie magna bibendum magna nisl facilisis eu facilisis fusce maximus quam diam quisque leo condimentum magna tincidunt enim phasellus lacus metus placerat tristique quis rutrum hendrerit leo maecenas bibendum bibendum commodo facilisis lacus consectetur lorem condimentum lacus dolor maximus a sit urna accumsan dolor interdum hendrerit tortor eget orci pellentesque urna tristique consectetur urna elementum tristique eros ac placerat maecenas eros cursus scelerisque interdum lacus tempus dolor nec gravida lorem diam quis adipiscing elit commodo gravida dolor amet quis phasellus proin ipsum purus quam leo orci interdum maximus hendrerit ac quis nec vivamus ipsum.
            Tristique sed nec molestie fusce a gravida tempus bibendum commodo molestie rutrum amet facilisis varius portaest orci ex mi molestie eros et enim arcu purus ipsum quis ac tincidunt pellentesque lacus felis quam enim fusce mi cursus condimentum nec rutrum cursus elementum felis ut condimentum leo sem vivamus accumsan nunc aliquam enim elementum nisl orci pellentesque tortor commodo nisi tempus fusce lorem nec eros eros ac nisi purus enim eu fusce hendrerit adipiscing maecenas nunc ipsum suspendisse sollicitudin sit ipsum dolor accumsan hendrerit vel facilisis elementum euismod nisl nisi eros phasellus sollicitudin ipsum maecenas adipiscing varius vivamus molestie nisl lorem.
            Tempus lacus quam gravida tincidunt bibendum varius et eros mi molestie nec consectetur condimentum quam tincidunt nisi quam nulla fusce sit eros quam tempus pellentesque scelerisque pellentesque accumsan bibendum morbi nisl quam tempus metus pellentesque et nunc lorem maximus ipsum sem sit maecenas hendrerit felis morbi lacus a ac tincidunt ut aliquam tempus phasellus urna felis erat quisque sollicitudin suspendisse sed urna rutrum et tempus lorem enim elit congue maximus nisl sollicitudin sit et accumsan quisque interdum maximus consectetur vel tortor nunc diam felis nisi accumsan maximus urna purus felis sed tortor aliquam phasellus massa adipiscing interdum eu congue condimentum.
            Elementum placerat enim pellentesque nec commodo ex maximus facilisis commodo scelerisque leo arcu bibendum vel tristique fusce eu scelerisque morbi adipiscing eget lorem sit massa sed sed eu pellentesque aliquam commodo morbi ac lacus elementum cursus ut rutrum maecenas magna condimentum lacus congue elit scelerisque hendrerit lacus mi tortor phasellus scelerisque adipiscing vel ipsum sollicitudin maximus ac proin pellentesque vivamus nulla metus quis accumsan cursus purus felis hendrerit sed diam eget sed accumsan vel bibendum lorem ut tortor adipiscing orci dolor pellentesque leo sollicitudin morbi varius metus felis congue nec amet tortor aliquam morbi nec varius mi orci bibendum scelerisque.`

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

            <AppliedModal toggleModal={toggleModal} open={open} job={selectedJob} />
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