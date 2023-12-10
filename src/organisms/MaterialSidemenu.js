import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                            backgroundColor: "#0B2A49",
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    {props.children}
                </Drawer>
            </Box>
        </>
    );
}
