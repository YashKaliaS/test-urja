// import React from 'react';
// import { FaBars } from 'react-icons/fa';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
// import { styled } from '@mui/system';

// const StyledDrawer = styled(Drawer)(({ theme }) => ({
//   '& .MuiDrawer-paper': {
//     width: '250px',
//     transition: 'width 0.3s',
//     overflowX: 'hidden',
//     boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
//   },
//   '&.collapsed .MuiDrawer-paper': {
//     width: '70px',
//   },
// }));

// function Sidebar({ isOpen, toggleSidebar }) {
//   const menuItems = [
//     { text: 'Business View', icon: 'bi-speedometer2' },
//     { text: 'Job Vacancy Posting', icon: 'bi-search' },
//     { text: 'Compliance and Legal', icon: 'bi-bell' },
//     { text: 'Screening, Interview, Induction', icon: 'bi-camera-video' },
//     { text: 'Tests and Assessments', icon: 'bi-pencil-square' },
//     { text: 'Teacher Profile', icon: 'bi-file-earmark-text' },
//     { text: 'Storage', icon: 'bi-chat-dots' },
//     { text: 'Ratings', icon: 'bi-gear' },
//     { text: 'Teacher Payments', icon: 'bi-people' },
//     { text: 'Referral Pay', icon: 'bi-person-workspace' },
//     { text: 'Affiliate Pay', icon: 'bi-file-richtext' },
//     { text: 'Update Vacancy', icon: 'bi-credit-card' },
//     { text: 'KRA', icon: 'bi-credit-card' },
//     { text: 'Employees', icon: 'bi-credit-card' },
//     { text: 'Chat', icon: 'bi-credit-card' },
//     { text: 'Teacher Old', icon: 'bi-credit-card' },
//     { text: 'Teacher New', icon: 'bi-credit-card' },
//     { text: 'Complains', icon: 'bi-credit-card' },
//     { text: 'Tuition details', icon: 'bi-credit-card' },

//   ];

//   return (
//     <StyledDrawer
//       variant="permanent"
//       className={isOpen ? '' : 'collapsed'}
//     >
//       {/* Sidebar Header with Burger Icon */}
//       <div className="d-flex align-items-center justify-content-between p-3 border-bottom bg-light">
//         <span className={`fw-bold ${isOpen ? '' : 'd-none'}`}>HR Dashboard</span>
//         <IconButton
//           onClick={toggleSidebar}
//           size="small"
//           className={` ${isOpen ? '' : 'd-flex'}`}
//         >
//           <FaBars size={24} />
//         </IconButton>
//       </div>

//       {/* Sidebar Menu */}
//       <List>
//         {menuItems.map((item, index) => (
//           <ListItem button key={index} className="p-3">
//             <ListItemIcon>
//               <i className={`bi ${item.icon} text-primary`} />
//             </ListItemIcon>
//             {isOpen && <ListItemText primary={item.text} />}
//           </ListItem>
//         ))}
//       </List>
//     </StyledDrawer>
//   );
// }

// export default Sidebar;




import React from 'react';
import { FaTimes } from 'react-icons/fa';
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
    { text: 'Business View', icon: 'bi-speedometer2' },
    { text: 'Job Vacancy Posting', icon: 'bi-search' },
    { text: 'Compliance and Legal', icon: 'bi-bell' },
    { text: 'Screening, Interview, Induction', icon: 'bi-camera-video' },
    { text: 'Tests and Assessments', icon: 'bi-pencil-square' },
    { text: 'Teacher Profile', icon: 'bi-file-earmark-text' },
    { text: 'Storage', icon: 'bi-chat-dots' },
    { text: 'Ratings', icon: 'bi-gear' },
    { text: 'Teacher Payments', icon: 'bi-people' },
    { text: 'Referral Pay', icon: 'bi-person-workspace' },
    { text: 'Affiliate Pay', icon: 'bi-file-richtext' },
    { text: 'Update Vacancy', icon: 'bi-credit-card' },
    { text: 'KRA', icon: 'bi-credit-card' },
    { text: 'Employees', icon: 'bi-credit-card' },
    { text: 'Chat', icon: 'bi-credit-card' },
    { text: 'Teacher Old', icon: 'bi-credit-card' },
    { text: 'Teacher New', icon: 'bi-credit-card' },
    { text: 'Complains', icon: 'bi-credit-card' },
    { text: 'Tuition details', icon: 'bi-credit-card' },
  ];

  return (
    <StyledDrawer
      open={isOpen}
      onClose={toggleSidebar}
      variant="temporary"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {/* Sidebar Header with Close Icon */}
      <div className="d-flex align-items-center justify-content-between p-3 border-bottom bg-light">
        <span className={`fw-bold ${isOpen ? '' : 'd-none'}`}>HR Dashboard</span>
        <IconButton
          onClick={toggleSidebar}
          size="small"
        >
          <FaTimes size={24} />
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
