import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './common.component.css';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import DeptComponent from './common.deptcomponent';


const drawerWidth = '20vw';
const departments = ['Servicing', 'Assembly', 'Inventory', 'Quality'];
//later on we can feed different department names using props

function CommonComponent() {
  const [currentDept, setCurrentDept]=useState(null)

  function handleDept(dept:any){
      setCurrentDept(dept)
  }

  return (
    <StyledEngineProvider injectFirst>
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
            <Typography variant="h6" noWrap component="div">
                Euler Motors
            </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
            <List>
                {departments.map((text, index) => (
                <ListItem button key={index}>
                    <ListItemText primary={text} onClick={()=>handleDept(text)} />
                </ListItem>
                ))}
            </List>
            </Box>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Typography paragraph>
                <DeptComponent dept={currentDept} />
            </Typography>
        </Box>

        </Box>
    </StyledEngineProvider>
  );
}

export default CommonComponent;
