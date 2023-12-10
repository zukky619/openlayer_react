import React from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import WifiIcon from "@mui/icons-material/Wifi";
import LogoutIcon from "@mui/icons-material/Logout";
import EditLocationIcon from "@mui/icons-material/EditLocation";

import MySidebar from "./MaterialSidemenu";

export default function MyNavigator(props) {
    return (
        <>
            <MySidebar>
                <List component="nav" style={{ height: "100vh" }}>
                    <ListItemButton component="a" href="/home">
                        <ListItemIcon>
                            <WifiIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Home"
                            primaryTypographyProps={{
                                color: "#EEEEEE",
                                fontWeight: "medium",
                                variant: "body2",
                            }}
                        />
                    </ListItemButton>
                    <ListItemButton component="a" href="/edit">
                        <ListItemIcon>
                            <EditLocationIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Edit"
                            primaryTypographyProps={{
                                color: "#EEEEEE",
                                fontWeight: "medium",
                                variant: "body2",
                            }}
                        />
                    </ListItemButton>
                </List>
                <List
                    component="nav"
                    style={{
                        position: "absolute",
                        bottom: "0px",
                        right: "0px",
                        left: "0px",
                    }}
                >
                    <Divider color="#1976D2" />
                    <ListItemButton component="a" href="/">
                        <ListItemIcon>
                            <LogoutIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Logout"
                            primaryTypographyProps={{
                                color: "#EEEEEE",
                                fontWeight: "medium",
                                variant: "body2",
                            }}
                        />
                    </ListItemButton>
                </List>
            </MySidebar>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: "background.default",
                    p: 3,
                    paddingLeft: "260px",
                }}
            >
                {props.children}
            </Box>
        </>
    );
}
