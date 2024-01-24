import *as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import BusinessIcon from '@mui/icons-material/Business';
import '../DashBoard/DashBoard.css'

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const data = [
    'Make a Reservation', 'Refund Bookings', 'New Bookings', 'Booking Records'
]

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [bookingopen, setBookingopne] = useState(false)
    const [roommanageopen, setRoommanageopne] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClickBooking = () => {
        setBookingopne(!bookingopen);
    };
    const handleClickRoomManage = () => {
        setRoommanageopne(!roommanageopen);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader >
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{backgroundColor:'#F7F8FA',}}>
                    <ListItemButton >
                        <BusinessIcon className='icon_color' />
                        <p className='icon_text'>DashBoard</p>
                    </ListItemButton>
                    <ListItemButton onClick={handleClickBooking} className='icon_and_text' >
                        <BusinessIcon className='icon_color' />
                        <p className='icon_text'>Bookings</p>
                        {bookingopen ? <ExpandMore className='icon_and_text' /> : <ChevronRightIcon className='icon_and_text' />}
                    </ListItemButton>
                    <Collapse in={bookingopen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <div className='sub_content'>
                            {data.map((name,id) => (
                                <div>
                                        <p className='icon_text'>{name}</p>
                                       {id!==data.length-1 && <Divider />}
                                </div>
                            ))}
                            </div>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleClickRoomManage}>
                        <BusinessIcon className='icon_color' />
                        <p className='icon_text'>Room Management</p>
                        {roommanageopen ? <ExpandMore className='icon_and_text' /> : <ChevronRightIcon className='icon_and_text' />}
                    </ListItemButton>
                    <Collapse in={roommanageopen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <div className='sub_content'>
                            {data.map((name,id) => (
                                <div>
                                        <p className='icon_text'>{name}</p>
                                       {id!==data.length-1 && <Divider/>}
                                </div>
                            ))}
                            </div>
                        </List>
                    </Collapse>
                   
                    <ListItemButton >
                        <BusinessIcon className='icon_color' />
                        <p className='icon_text'>Resort</p>

                    </ListItemButton>
                    <ListItemButton >
                        <BusinessIcon className='icon_color' />
                        <p className='icon_text'>Features and Facilities</p>

                    </ListItemButton>
                    <ListItemButton >
                        <BusinessIcon className='icon_color' />
                        <p className='icon_text'>User Queries</p>

                    </ListItemButton>
                    <ListItemButton >
                        <BusinessIcon className='icon_color' />
                        <p className='icon_text'>Ratings & Reviews</p>

                    </ListItemButton>
                    <ListItemButton >
                        <BusinessIcon className='icon_color' />
                        <p className='icon_text'>Settings</p>

                    </ListItemButton>
                    <ListItemButton >
                        <BusinessIcon className='icon_color' />
                        <p className='icon_text'>Inbox</p>

                    </ListItemButton>
                </List>


            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>
                    {/* Your main content goes here */}
                </Typography>
            </Main>
        </Box>
    );
}
