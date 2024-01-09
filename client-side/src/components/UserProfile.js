import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';


const UserProfile = (props) => {
    console.log(props.firstLetter);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:5050/auth/logout', {
                method: 'POST',
                credentials: 'include', // Send cookies with the request
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                localStorage.removeItem('authToken');
                props.setLogin(false)
                navigate('/login');
            } else {
                console.error('Error during logout:', response.statusText);
            }
        } catch (error) {
            console.error('Error during logout:', error.message);
        }
    };


    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 40, height: 40, textTransform: 'capitalize' }}>{props.firstLetter}</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 40,
                            height: 35,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose} className='d-flex justify-content-start '>

                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/profile'}>Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className='d-flex justify-content-start '>

                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/appointment'}>Appointment</Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} className='d-flex justify-content-center '>
                    <ListItemIcon onClick={handleLogout} className='d-flex gap-2 ' >
                        <Logout fontSize="small" />
                        Logout
                    </ListItemIcon>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

export default UserProfile;