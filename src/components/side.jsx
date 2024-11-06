import * as React from 'react';
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
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useMediaQuery from '@mui/material/useMediaQuery';
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
import { Link,useNavigate } from 'react-router-dom';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, isMobile }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open && !isMobile ? 0 : isMobile ? 0 : `-${drawerWidth}px`,
    ...(open && !isMobile && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
  marginLeft: open ? drawerWidth : 0,
  ...(open && {
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
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(null);
  const [title, setTitle] = React.useState('Dashboard');
  const isMobile = useMediaQuery('(max-width:786px)');
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open && !isMobile}
      sx={{
        backgroundColor: 'rgba(231, 231, 231, 1)',
        color: 'black',
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: '36px',}}
      
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && !isMobile && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ color: 'black', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '36px' }} noWrap>
            {title}
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
            ...(isMobile && {
              position: 'absolute',
              zIndex: theme.zIndex.drawer + 1,
            }),
          },
        }}
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={open}
        onClose={isMobile ? handleDrawerClose : undefined}
      >
        <DrawerHeader sx={{  paddingTop:'50px',  justifyContent: 'center', paddingBottom:'100px'}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <img  src={Logo} alt="Logo" />
      
        </DrawerHeader>

        <div>
     <List sx={{ display: 'flex', flexDirection: 'column', padding: '0 19px', gap: '30px' }}>
        {renderNavItems(NAVIGATION)}
      </List>
    </div>
      </Drawer>
      <Main sx={{paddingTop:'104px',width: { sm: `calc(100% - ${drawerWidth}px)` }}} open={open && !isMobile} isMobile={isMobile}>
        {/* <DrawerHeader /> */}
       {children}
      </Main>
    </Box>
  );
}
