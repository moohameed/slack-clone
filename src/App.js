import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import styled from 'styled-components';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar'
import Chat from './components/chat/Chat';
function App() {
  return (
    <div className="app">
       <Router>
      <>
          <Header />  
                <AppBody>
                        <SideBar />
                        <Routes>
                        
                          <Route path="/" element = {<Chat />}>   </Route>
                            
                      
                        </Routes>
                  </AppBody>      
      </>
    </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div `
display: flex;
height: 100vh;
`
