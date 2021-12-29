import React from 'react'

import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SidebarOptions from './SidebarOptions'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import {useCollection} from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';

function SideBar() {

    const [channels ] = useCollection(db.collection("rooms")) ;
 

    return (
        <SidebarContainer>
            <SidebarHeader >
                <SidebarInfo >
                    <h2> Hello fam !!!</h2>
                    <h3> 
                    <FiberManualRecordIcon/>
                    Med Trabelsi 
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <SidebarOptions Icon = {InsertCommentIcon} tittle = 'Threads' />
            <SidebarOptions Icon = {InboxIcon} tittle = 'Mentions & reactions' />
            <SidebarOptions Icon = {DraftsIcon} tittle = 'Saved Items' />
            <SidebarOptions Icon = {BookmarkBorderIcon} tittle = 'Channel browser' />
            <SidebarOptions Icon = {PeopleAltIcon} tittle = 'People & user groups' />
            <SidebarOptions Icon = {AppsIcon} tittle = 'Apps' />
            <SidebarOptions Icon = {FileCopyIcon} tittle = 'File browser' />
            <SidebarOptions Icon = {ExpandLessIcon} tittle = 'Show less' />
            
            <hr  />
            <SidebarOptions Icon = {ExpandMoreIcon} tittle = 'Channels' />
            <hr />
            <SidebarOptions Icon = {AddIcon} addChannelOption tittle = 'Add Channel' />

           {channels?.docs.map((doc)=> (
               <SidebarOptions 
               key={doc.id}
               id={doc.id}
               
               tittle = {doc.data().name}
               />
           ))}

        </SidebarContainer>
    )
}

export default SideBar

const SidebarContainer = styled.div`
color: white;
background-color: var(--slack-color);
flex: 0.3;
margin-top: 60px;
overflow-y: scroll ;
scroll-behavior: smooth;
::-webkit-scrollbar{
    width: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #64226a;
  border-radius: 4px;
  height: 390px;
  width: 100%;
}

position: sticky;
top: 20px;

max-width: 260px ;
border-top: 1px solid #49274b;
>hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
    
}

`
const SidebarHeader = styled.div `
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;


>.MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
    cursor: pointer;
}


`
const SidebarInfo = styled.div `
flex: 1;

        >h2{

            font-size: 15px;
            font-weight: 900;
            margin-bottom: 5px;
        }

        >h3{
            display: flex;
            font-size: 13px;
            font-weight: 400;
            align-items: center;
        }

        >h3  >.MuiSvgIcon-root{
            font-size : 14px ; 
            margin-top : 1px ;
            margin-right: 2px;
            color: green;
        }
`