import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { styled } from '@mui/system';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '250px',
    transition: 'width 0.3s',
    overflowX: 'hidden',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  '&.collapsed .MuiDrawer-paper': {
    width: '70px',
  },
}));

function Sidebar({ isOpen, toggleSidebar }) {
  const menuItems = [
    { text: 'Dashboard', icon: 'bi-speedometer2' },
    { text: 'Search', icon: 'bi-search' },
    { text: 'Notification', icon: 'bi-bell' },
    { text: 'PT Meeting', icon: 'bi-camera-video' },
    { text: 'Edit Website', icon: 'bi-pencil-square' },
    { text: 'Report', icon: 'bi-file-earmark-text' },
    { text: 'Chats', icon: 'bi-chat-dots' },
    { text: 'Manage', icon: 'bi-gear' },
    { text: 'Parent', icon: 'bi-people' },
    { text: 'Teacher', icon: 'bi-person-workspace' },
    { text: 'Blogs', icon: 'bi-file-richtext' },
    { text: 'Payment & Account', icon: 'bi-credit-card' },
  ];

  return (
    <StyledDrawer
      variant="permanent"
      className={isOpen ? '' : 'collapsed'}
    >
      {/* Sidebar Header with Burger Icon */}
      <div className="d-flex align-items-center justify-content-between p-3 border-bottom bg-light">
        <span className={`fw-bold ${isOpen ? '' : 'd-none'}`}>HR Dashboard</span>
        <IconButton
          onClick={toggleSidebar}
          size="small"
          className={` ${isOpen ? '' : 'd-flex'}`}
        >
          <FaBars size={24} />
        </IconButton>
      </div>

      {/* Sidebar Menu */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} className="p-3">
            <ListItemIcon>
              <i className={`bi ${item.icon} text-primary`} />
            </ListItemIcon>
            {isOpen && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
}

export default Sidebar;
