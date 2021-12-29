import React from 'react'
import styled from 'styled-components';
import {Avatar} from '@material-ui/core'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';



function Header() {
   

    return (
      <HeaderContainer >
          {/*  HeaderLeft section      */}
            <HeaderLeft>
                <HeaderAvatar  />
                <AccessTimeIcon />
            </HeaderLeft>
          {/*  HeaderLeft search      */}

          <HeaderSearch>
              <SearchIcon />
              <input placeholder='Search...' />
          </HeaderSearch>

          {/*  HeaderLeft right      */}
          <HeaderRight >  
         < HelpOutlineOutlinedIcon />
        </HeaderRight>
      </HeaderContainer>
    )
}

export default Header



const HeaderRight = styled.div `
display: flex;
flex : 0.3 ;
align-items: flex-end;
>.MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
}



`

const HeaderContainer = styled.div `
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
color: white;

`

const HeaderLeft = styled.div `

display: flex;
flex:0.3;
align-items: center;
margin-left: 20px;
>.MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
}

` ;

const HeaderAvatar = styled(Avatar) `
cursor: pointer;

:hover {
    opacity: 0.8;
}

` ;

const HeaderSearch = styled.div `
display: flex;
flex: 0.4 ;
opacity: 1;
border-radius: 6px;
background-color: #421f44;
text-align: center;
padding: 0 50px;
color: gray;
border: 1px gray solid;
 >input {
     background-color: transparent;
     border: none;
     text-align: center;
     min-width: 30vw;
     outline: none;
     color: white;
     
 }

` ;