import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from '../images/dashboard.svg';
import Logo from '../images/piqsolLogo.svg';
import pendingEvents from '../images/pendingEvents.svg';
import PendingApproval from '../images/PendingApproval.svg';
import approvedEvents from '../images/approvedEvents.svg';
import UpcomingEvents from '../images/UpcomingEvents.svg';
import PastEvents from '../images/PastEvents.svg';
import Payout from '../images/Payout.svg';
import report from '../images/report.svg';
import User from '../images/users.svg';

const drawerWidth = 222;

function Sidebar({ window, children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(null);
  const [title, setTitle] = React.useState('Dashboard'); // Title state for AppBar
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMenuToggle = (menu, path, title) => {
    // Update title on item click
    setTitle(title);

    // If the menu has a path, navigate to it; otherwise, toggle the submenu
    if (path) {
      navigate(path);
    } else {
      setOpenMenu((prev) => (prev === menu ? null : menu));
    }
  };

  const NAVIGATION = [
    { segment: 'dashboard', title: 'Dashboard', icon: Dashboard },
    {
      segment: 'pending Events',
      title: 'Pending Events',
      icon: pendingEvents,
      children: [
        { segment: 'Pending Approval', title: 'Pending Approval', icon: PendingApproval },
        { segment: 'Approved Events', title: 'Approved Events', icon: approvedEvents },
      ],
    },
    { segment: 'Upcoming Events', title: 'Upcoming Events', icon: UpcomingEvents },
    { segment: 'Past Events', title: 'Past Events', icon: PastEvents },
    { segment: 'Payout Requests', title: 'Payout Requests', icon: Payout },
    { segment: 'Reports', title: 'Reports', icon: report },
    { segment: 'Users', title: 'Users', icon: User },
  ];

  const renderNavItems = (items) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <div key={item.segment}>
            <ListItem
              sx={{ padding: '5px 10px', width: 'max-content', gap: '10px' }}
              button
              onClick={() => handleMenuToggle(item.segment, item.path, item.title)}
            >
              <ListItemIcon sx={{ minWidth: '0px' }}>
                <img src={item.icon} alt={item.title} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontFamily: 'Montserrat',
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'rgba(0, 0, 0, 1)',
                }}
                primary={item.title}
              />
            </ListItem>
            {openMenu === item.segment && (
              <List component="div" disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: '19px' }}>
                {item.children.map((child) => (
                  <ListItem
                    button
                    key={child.segment}
                    sx={{ paddingLeft: '20px', padding: '5px 10px', width: 'max-content', gap: '10px' }}
                    component={Link}
                    to={child.path}
                    onClick={() => setTitle(child.title)} // Update title for child items
                  >
                    <ListItemIcon sx={{ minWidth: '0px' }}>
                      <img src={child.icon} alt={child.title} />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        fontFamily: 'Montserrat',
                        fontSize: '14px',
                        fontWeight: '400',
                        color: 'rgba(119, 119, 119, 1)',
                      }}
                      primary={child.title}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </div>
        );
      }
      return (
        <ListItem
          sx={{ padding: '5px 10px', width: 'max-content', gap: '10px' }}
          button
          key={item.segment}
          component={Link}
          to={item.path}
          onClick={() => handleMenuToggle(item.segment, item.path, item.title)}
        >
          <ListItemIcon sx={{ minWidth: '0px' }}>
            <img src={item.icon} alt={item.title} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              fontWeight: '400',
              color: 'rgba(0, 0, 0, 1)',
            }}
            primary={item.title}
          />
        </ListItem>
      );
    });
  };

  const drawer = (
    <div>
      <img style={{ padding: '50px 51px 100px 51px' }} src={Logo} alt="Logo" />
      <List sx={{ display: 'flex', flexDirection: 'column', padding: '0 19px', gap: '30px' }}>
        {renderNavItems(NAVIGATION)}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(231, 231, 231, 1)',
          color: 'black',
          fontFamily: 'Montserrat',
          fontWeight: 700,
          fontSize: '36px',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ color: 'black', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '36px' }} noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        {children}
      </Box>
    </Box>
  );
}

export default Sidebar;
