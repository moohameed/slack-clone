import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { enterRoom } from '../../features/appSlice';
import { db } from '../../firebase';
function SidebarOptions({Icon , tittle ,addChannelOption, id}) {

   const dispatch = useDispatch() ;
  
    const addChannel = () =>  {
      const channelName = prompt("please enter the channel name") ;
      if (channelName) {
          db.collection("rooms").add ({
              name : channelName,
          })
      }
    }

    const selectChannel = () =>  {
         if (id) {
             dispatch(enterRoom({
                 roomId : id
             }))
         }
    }


    return (
       <SidebarOptionsContainer 
       onClick={addChannelOption ? addChannel : selectChannel }
       >
          {Icon && <Icon fontSize = "small" style = {{padding : 10}} /> }

          {Icon ? (
              <h3>{tittle}</h3>
          ) : (
            <SidebarOptionChannel>
                <span>#</span> {tittle}
            </SidebarOptionChannel>
          )
        }
       </SidebarOptionsContainer>
    )
}

export default SidebarOptions ;

const SidebarOptionsContainer = styled.div `
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;
:hover {
    opacity: 0.9;
    background-color: #340e36;
    border-radius: 20px;
}
>h3 {
    font-weight: 500;
    
}



`
const SidebarOptionChannel = styled.h3 `

    padding: 10px;
    font-weight: 400;


`