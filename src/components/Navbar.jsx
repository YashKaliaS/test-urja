// import React from 'react';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
//       <div className="container-fluid">
        
//         <form className="d-flex ms-auto me-3">
//           <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
//         </form>
//         <div className="d-flex align-items-center">
//           <span className="me-3 d-none d-sm-inline">Urja Talents</span>
//           <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>UT</div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';
import { IconButton } from '@mui/material';
import { FaBars } from 'react-icons/fa';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        {/* Burger Icon for Mobile on Top Left */}
        <IconButton
          onClick={toggleSidebar}
          className=""
          size="large"
        >
          <FaBars size={24} />
        </IconButton>

        <form className="d-flex ms-auto me-3">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
        </form>
        <div className="d-flex align-items-center">
          <span className="me-3 d-none d-sm-inline">Urja Talents</span>
          <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            UT
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
