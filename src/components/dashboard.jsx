import { JoinFull } from '@mui/icons-material';
import React from 'react';
import { FaEye } from 'react-icons/fa';

function Dashboard() {
  const metrics = [
    { title: 'No. of active teachers', value: '100+', color: 'primary' },
    { title: 'Teachers on leave', value: '07', color: 'danger' },
    { title: 'Request of leave', value: '10', color: 'warning' },
    { title: 'No. of Employees', value: '34%', color: 'success' },
    { title: 'No. of Interviews today', value: '45%', color: 'danger' },
    { title: 'No. of classess cancelled', value: '89%', color: 'success' },
    { title: 'No. of classes on hold', value: '34%', color: 'danger' },
    { title: 'No. of complaints', value: '71%', color: 'info' },
  ];

  const ptMeetings = [
    {
      sNo: 1,
      teacherName: 'John Doe',
      teacherId: 'T-1001',
      qualification: 'MSc Mathematics',
      subject: 'Mathematics',
      grade: 'A',
      board: 'CBSE',
      test1Marks: 85,
      test2Marks: 90,
      interviewDateTime: '2021-09-01 10:00 AM',
      cv: 'john_doe_cv.pdf',
      status: 'Accepted',
      join: 'Yes'
    },
    {
      sNo: 2,
      teacherName: 'Jane Smith',
      teacherId: 'T-1002',
      qualification: 'BSc Chemistry',
      subject: 'Chemistry',
      grade: 'B',
      board: 'ICSE',
      test1Marks: 75,
      test2Marks: 80,
      interviewDateTime: '2021-09-02 11:00 AM',
      cv: 'jane_smith_cv.pdf',
      status: 'Not Accepted',
      join: 'No'
    },
    {
      sNo: 3,
      teacherName: 'Mark Lee',
      teacherId: 'T-1003',
      qualification: 'BEd',
      subject: 'Physics',
      grade: 'A',
      board: 'CBSE',
      test1Marks: 92,
      test2Marks: 88,
      interviewDateTime: '2021-09-03 09:00 AM',
      cv: 'mark_lee_cv.pdf',
      status: 'Accepted',
      join: 'Yes'
    }
  ];
  

  const internApplications = [
    {
      sNo: 1,
      name: 'Alice Johnson',
      qualification: 'BSc Computer Science',
      role: 'Frontend Developer',
      cv: 'alice_johnson_cv.pdf',
      view: 'View Details'
    },
    {
      sNo: 2,
      name: 'Bob Williams',
      qualification: 'BCom',
      role: 'Marketing Intern',
      cv: 'bob_williams_cv.pdf',
      view: 'View Details'
    },
    {
      sNo: 3,
      name: 'Charlie Brown',
      qualification: 'BSc Electrical Engineering',
      role: 'Electrical Engineering Intern',
      cv: 'charlie_brown_cv.pdf',
      view: 'View Details'
    }
  ];

  const employeeAttendance = [
    {
      sNo: 1,
      employeeId: 'E-001',
      employeeName: 'Steve Rogers',
      role: 'HR Manager',
      fullDays: 20,
      halfDays: 2,
      leaves: 3
    },
    {
      sNo: 2,
      employeeId: 'E-002',
      employeeName: 'Natasha Romanoff',
      role: 'Recruitment Specialist',
      fullDays: 22,
      halfDays: 1,
      leaves: 2
    },
    {
      sNo: 3,
      employeeId: 'E-003',
      employeeName: 'Tony Stark',
      role: 'Tech Lead',
      fullDays: 18,
      halfDays: 4,
      leaves: 1
    }
  ];

  const teacherComplaints = [
    {
      sNo: 1,
      teacherId: 'T-1001',
      teacherName: 'John Doe',
      parentId: 'P-001',
      parentName: 'Mary Doe',
      childId: 'C-001',
      childName: 'Lucy Doe',
      complaintTitle: 'Classroom Management Issues',
      view: 'View Complaint'
    },
    {
      sNo: 2,
      teacherId: 'T-1002',
      teacherName: 'Jane Smith',
      parentId: 'P-002',
      parentName: 'Paul Smith',
      childId: 'C-002',
      childName: 'Ben Smith',
      complaintTitle: 'Late Response to Emails',
      view: 'View Complaint'
    },
    {
      sNo: 3,
      teacherId: 'T-1003',
      teacherName: 'Mark Lee',
      parentId: 'P-003',
      parentName: 'Eve Lee',
      childId: 'C-003',
      childName: 'Ella Lee',
      complaintTitle: 'Unprofessional Behavior During Class',
      view: 'View Complaint'
    }
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

      <div>
        <h2 className="h4 mb-3">Teacher Applications</h2>
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
                <th>Teacher Name</th>
                <th>Teacher ID</th>
                <th>Qualification</th>
                <th>Subject</th>
                <th>Grade</th>
                <th>Board</th>
                <th>Test 1 Marks</th>
                <th>Test 2 Marks</th>
                <th>Interview DateTime</th>
                <th>CV</th>
                <th>Status</th>
                <th>Join</th>
              </tr>
            </thead>

            <tbody>
  {ptMeetings.map((meeting) => (
    <tr key={meeting.sNo}>
      <td>{meeting.sNo}</td>
      <td>{meeting.teacherName}</td>
      <td>{meeting.teacherId}</td>
      <td>{meeting.qualification}</td>
      <td>{meeting.subject}</td>
      <td>{meeting.grade}</td>
      <td>{meeting.board}</td>
      <td>{meeting.test1Marks}</td>
      <td>{meeting.test2Marks}</td>
      <td>{meeting.interviewDateTime}</td>
      <td><FaEye /></td>

      <td>{meeting.status}</td>
      <td >

        <button className='p-1 rounded bg-primary text-white'>
          Join
          </button>
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="h4 mb-3">Intern Applications</h2>
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
                <th>Name</th>
                <th>Qualification</th>
                <th>Role</th>
                <th>CV</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
  {internApplications.map((intern) => (
    <tr key={intern.sNo}>
      <td>{intern.sNo}</td>
      <td>{intern.name}</td>
      <td>{intern.qualification}</td>
      <td>{intern.role}</td>
      <td>{intern.cv}</td>
      <td><FaEye /></td>

    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>

      <div>
        <h2 className="h4 mb-3">Employee Attendance</h2>
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
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Role</th>
                <th>No. of Full days</th>
                <th>No. of Half days</th>
                <th>No. of Leaves</th>
              </tr>
            </thead>
            <tbody>
  {employeeAttendance.map((attendance) => (
    <tr key={attendance.sNo}>
      <td>{attendance.sNo}</td>
      <td>{attendance.employeeId}</td>
      <td>{attendance.employeeName}</td>
      <td>{attendance.role}</td>
      <td>{attendance.fullDays}</td>
      <td>{attendance.halfDays}</td>
      <td>{attendance.leaves}</td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>

      <div>
        <h2 className="h4 mb-3">Teacher Complaints</h2>
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
                <th>Teacher ID</th>
                <th>Teacher Name</th>
                <th>Parent ID</th>
                <th>Parent Name</th>
                <th>Child ID</th>
                <th>Child Name</th>
                <th>Complaint TItle</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
  {teacherComplaints.map((complaint) => (
    <tr key={complaint.sNo}>
      <td>{complaint.sNo}</td>
      <td>{complaint.teacherId}</td>
      <td>{complaint.teacherName}</td>
      <td>{complaint.parentId}</td>
      <td>{complaint.parentName}</td>
      <td>{complaint.childId}</td>
      <td>{complaint.childName}</td>
      <td>{complaint.complaintTitle}</td>
      <td><FaEye /></td>
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
