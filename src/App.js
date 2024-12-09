// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/dashboard.jsx';

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <div className="d-flex">
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//       <div
//         id="page-content-wrapper"
//         className="flex-grow-1"
//         style={{
//           marginLeft: sidebarOpen ? '250px' : '70px',
//           transition: 'margin-left 0.3s',
//         }}
//       >
//         <Navbar toggleSidebar={toggleSidebar} />
//         <Dashboard />
//       </div>
//     </div>
//   );
// }

// export default App;






import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex flex-column flex-lg-row min-vh-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div id="page-content-wrapper" className="flex-grow-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

