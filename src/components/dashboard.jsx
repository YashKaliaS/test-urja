import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaBars } from 'react-icons/fa';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const metrics = [
    { title: 'Active Classes', value: '100+', color: 'primary', icon: 'bi-book' },
    { title: 'Canceled Classes', value: '07', color: 'danger', icon: 'bi-x-circle' },
    { title: 'Hold Classes', value: '10', color: 'warning', icon: 'bi-pause-circle' },
    { title: 'Active Parents', value: '34%', color: 'success', icon: 'bi-person-check' },
    { title: 'Inactive Parents', value: '45%', color: 'danger', icon: 'bi-person-x' },
    { title: 'Active Teacher', value: '89%', color: 'success', icon: 'bi-person-video3' },
    { title: 'Inactive Teacher', value: '34%', color: 'danger', icon: 'bi-person-dash' },
    { title: 'Teacher Requests', value: '71%', color: 'info', icon: 'bi-person-plus' },
    { title: 'Career Requests', value: '145M', color: 'danger', icon: 'bi-briefcase' },
    { title: 'Blog Requests', value: '76+', color: 'secondary', icon: 'bi-pencil-square' },
    { title: 'No. of Complaints', value: '45+', color: 'warning', icon: 'bi-exclamation-triangle' },
    { title: 'No. of Suggestions', value: '10+', color: 'info', icon: 'bi-lightbulb' },
  ];

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

  const ptMeetings = [
    {
      sNo: 1,
      classId: 'CLASS-12345',
      courseTitle: 'Mathematics',
      teacherName: 'John Doe',
      parentName: 'Jane Doe',
      childName: 'John Doe',
      date: '2021-09-01',
      time: '10:00',
      description: 'Parent Teacher Meeting',
      status: 'Accepted'
    },
    {
      sNo: 2,
      classId: 'CLASS-12345',
      courseTitle: 'Mathematics',
      teacherName: 'John Doe',
      parentName: 'Jane Doe',
      childName: 'John Doe',
      date: '2021-09-01',
      time: '10:00',
      description: 'Parent Teacher Meeting',
      status: 'Not Accepted'
    },
    {
      sNo: 3,
      classId: 'CLASS-12345',
      courseTitle: 'Mathematics',
      teacherName: 'John Doe',
      parentName: 'Jane Doe',
      childName: 'John Doe',
      date: '2021-09-01',
      time: '10:00',
      description: 'Parent Teacher Meeting',
      status: 'Accepted'
    },
  ];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div 
        className={`bg-light border-end ${sidebarOpen ? 'show' : 'd-none'}`} 
        id="sidebar-wrapper" 
        style={{width: '250px', minHeight: '100vh'}}
      >
        <div className="sidebar-heading border-bottom bg-light p-3">Operation Dashboard</div>
        <div className="list-group list-group-flush">
          {menuItems.map((item, index) => (
            <a key={index} href="#" className="list-group-item list-group-item-action list-group-item-light p-3">
              <i className={`bi ${item.icon} me-2`}></i> {item.text}
            </a>
          ))}
        </div>
      </div>

      {/* Page Content */}
      <div id="page-content-wrapper" style={{flex: 1}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <button className="btn btn-link" onClick={toggleSidebar}>
              <FaBars size={24} />
            </button>
            <form className="d-flex ms-auto me-3">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div className="d-flex align-items-center">
              <span className="me-3">Urja Talents</span>
              <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>UT</div>
            </div>
          </div>
        </nav>

        <div className="container-fluid p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h3">Dashboard</h1>
            <button className="btn btn-primary">Manual Lead</button>
          </div>
          
          {/* Metrics Grid */}
          <div className="row g-4 mb-5">
            {metrics.map((metric, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className={`card border-bottom border-bottom-primary h-100`}  >
                  <div className="card-body d-flex flex-column justify-content-start text-left"  style={{ borderBottom: `5px solid var(--bs-${metric.color})` }}>
                    {/* <i className={`bi ${metric.icon} fs-1 mb-2 text-${metric.color}`}></i> */}
                    <p className="text-muted mb-0">{metric.title}</p>
                    <h3 className={`h2 mb-2 text-${metric.color}`}>{metric.value}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PT Meeting Section */}
          <div className="mt-4">
            <h2 className="h4 mb-4">PT Meeting</h2>
            <div className="d-flex justify-content-between mb-3">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="filtersDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Filters
                </button>
                <ul className="dropdown-menu" aria-labelledby="filtersDropdown">
                  <li><a className="dropdown-item" href="#">All</a></li>
                  <li><a className="dropdown-item" href="#">Accepted</a></li>
                  <li><a className="dropdown-item" href="#">Not Accepted</a></li>
                </ul>
              </div>
              <input type="search" className="form-control w-25" placeholder="Search.." />
            </div>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>S.No.</th>
                    <th>Class Id</th>
                    <th>Course Title</th>
                    <th>Teacher Name</th>
                    <th>Parent Name</th>
                    <th>Child Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Description</th>
                    <th>Accepted By</th>
                  </tr>
                </thead>
                <tbody>
                  {ptMeetings.map((meeting) => (
                    <tr key={meeting.sNo}>
                      <td>{meeting.sNo}</td>
                      <td>{meeting.classId}</td>
                      <td>{meeting.courseTitle}</td>
                      <td>{meeting.teacherName}</td>
                      <td>{meeting.parentName}</td>
                      <td>{meeting.childName}</td>
                      <td>{meeting.date}</td>
                      <td>{meeting.time}</td>
                      <td>{meeting.description}</td>
                      <td>
                        <span className={`badge bg-${meeting.status === 'Accepted' ? 'success' : 'danger'}`}>
                          {meeting.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

