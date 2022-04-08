import React, { Fragment, useState } from 'react';
import './Header.css';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useNavigate } from 'react-router-dom';


const UserOptions = ({ user }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const options = [
        { icon: <ListAltIcon />, name: "Orders", func: orders },
        { icon: <PersonIcon />, name: "Profile", func: account },
        { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
    ];

    if (user.role === 'admin'){
        options.unshift({
            icon: <DashboardIcon />,
            name: 'Dashboard',
            func: DashboardIcon,
        });
    }

    function dashboard() {
        navigate('/dashboard');
    }

    function orders() {
        navigate('/orders');
    }

    function account() {
        navigate('/account');
    }

    function logoutUser() {
        //dispatch(logout());
        alert.success('Logout Successfully');
    }






  return (
    <Fragment>
        <SpeedDial
        ariaLabel='SpeedDial tooltip example'
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction='down'
        icon={
            <img
            className='speedDialIcon'
            src={user.avatar.url ? user.avatar.url : "/profile.png"}
            alt='Profile'
            />
        }
        >

        <SpeedDialAction icon={<DashboardIcon />} tooltipTitle='Dashboard' />
        </SpeedDial>

    </Fragment>
  )
}

export default UserOptions;