import  {Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


export default function MySidebar(props) {
    return(
        // <Sidebar>
        // <Menu>
        //     <SubMenu label="Charts">
        //     <MenuItem> Pie charts </MenuItem>
        //     <MenuItem> Line charts </MenuItem>
        //     </SubMenu>
        //     <MenuItem> Documentation </MenuItem>
        //     <MenuItem> Calendar </MenuItem>
        // </Menu>
        // </Sidebar>

        <>
            <Sidebar 
                backgroundColor='rgb(5, 5, 5, 0.7)'
                collapsed={false}
            >
            <Menu
                menuItemStyles={{
                button: ({ level, active, disabled }) => {
                    // only apply styles on first level elements of the tree
                    if (level === 0)
                    return {
                        color: disabled ? '#f5d9ff' : '#d359ff',
                        backgroundColor: active ? '#eecef9' : undefined,
                    };
                },
                }}
            >
                <MenuItem > Documentation</MenuItem>
                <MenuItem > Calendar</MenuItem>
                <MenuItem > E-commerce</MenuItem>
            </Menu>
            </Sidebar>        
        </>

    );
}