import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import "./Navbar.css";
//import { IconButton } from '@mui/material';
export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static"  style={{background:'#ffc40c'}}>
        <Toolbar>
            <nav>
            <Link to='/'>HOME</Link>
             &nbsp;
             &nbsp;
            <Link to='/Reg'>REGISTER</Link>
            &nbsp;
            &nbsp;
            <Link to='/sho'>SHOW</Link>
            &nbsp;
            &nbsp;
            <Link to='/Mar'></Link>
            &nbsp;
            &nbsp;
            <Link to='/Upd'>UPDATE</Link>
            &nbsp;
            &nbsp;
            <Link to='/Del'>DELETE</Link>
            </nav>
          
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}