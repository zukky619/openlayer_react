import React from 'react';
import Divider from '@mui/material/Divider';

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import WifiIcon from '@mui/icons-material/Wifi';
import LogoutIcon from '@mui/icons-material/Logout';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import EditLocationIcon from '@mui/icons-material/EditLocation';

import MySidebar from "./MaterialSidemenu";

export default function MyNavigator(props) {
    return (
        <>
            <MySidebar>
                <List component="nav" style={{height: '100vh'}}>
                    <ListItemButton component="a" href="/home">
                        <ListItemIcon>
                        <WifiIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton component="a" href="/edit">
                        <ListItemIcon>
                        <EditLocationIcon />
                        </ListItemIcon>
                        <ListItemText primary="Edit" />
                    </ListItemButton>
                </List>
                <List component="nav" style={{position: 'absolute', bottom: '0px', right: '0px', left: '0px'}}>
                    <Divider />
                    <ListItemButton component="a" href="/">
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="ログアウト" />
                    </ListItemButton>
                </List>

            </MySidebar>
        </>
    );
}