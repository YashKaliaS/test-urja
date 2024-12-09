import React from 'react';

function Dashboard() {
  const metrics = [
    { title: 'Active Classes', value: '100+', color: 'primary' },
    { title: 'Canceled Classes', value: '07', color: 'danger' },
    { title: 'Hold Classes', value: '10', color: 'warning' },
    { title: 'Active Parents', value: '34%', color: 'success' },
    { title: 'Inactive Parents', value: '45%', color: 'danger' },
    { title: 'Active Teacher', value: '89%', color: 'success' },
    { title: 'Inactive Teacher', value: '34%', color: 'danger' },
    { title: 'Teacher Requests', value: '71%', color: 'info' },
    { title: 'Career Requests', value: '145M', color: 'danger' },
    { title: 'Blog Requests', value: '76+', color: 'secondary' },
    { title: 'No. of Complaints', value: '45+', color: 'warning' },
    { title: 'No. of Suggestions', value: '10+', color: 'info' },
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
      status: 'Accepted',
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
      status: 'Not Accepted',
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
      status: 'Accepted',
    },
  ];

  return (
    <div className="container-fluid p-3">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h1 className="h3 mb-2 mb-md-0">Dashboard</h1>
        <button className="btn btn-primary">Manual Lead</button>
      </div>

      {/* Metrics Section */}
      <div className="row g-3 mb-5">
        {metrics.map((metric, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className={`card h-100 border-start border-${metric.color}`}>
              <div className="card-body">
                <p className="text-muted mb-1">{metric.title}</p>
                <h3 className={`text-${metric.color}`}>{metric.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PT Meeting Section */}
      <div>
        <h2 className="h4 mb-3">PT Meetings</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
          <div className="dropdown mb-2 mb-md-0">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="filtersDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filters
            </button>
            <ul className="dropdown-menu" aria-labelledby="filtersDropdown">
              <li><a className="dropdown-item" href="#">All</a></li>
              <li><a className="dropdown-item" href="#">Accepted</a></li>
              <li><a className="dropdown-item" href="#">Not Accepted</a></li>
            </ul>
          </div>
          <input
            type="search"
            className="form-control w-100 w-md-25"
            placeholder="Search..."
          />
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
                    <span
                      className={`badge bg-${meeting.status === 'Accepted' ? 'success' : 'danger'}`}
                    >
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
  );
}

export default Dashboard;
