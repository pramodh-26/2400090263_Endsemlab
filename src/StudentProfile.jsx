import { useState } from 'react';
import './StudentProfile.css';

function StudentProfile() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const student = {
    name: "John Doe",
    rollNumber: "2400090263",
    department: "Computer Science & Engineering",
    email: "john.doe@university.edu",
    phone: "+91 9876543210",
    semester: "6th",
    gpa: "3.8",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    status: "Active",
    enrollmentYear: "2022"
  };

  const academicDetails = [
    { icon: '🎓', label: 'Roll Number', value: student.rollNumber },
    { icon: '🏢', label: 'Department', value: student.department },
    { icon: '📚', label: 'Semester', value: student.semester },
    { icon: '⭐', label: 'GPA', value: student.gpa }
  ];

  const contactDetails = [
    { icon: '✉️', label: 'Email', value: student.email },
    { icon: '📱', label: 'Phone', value: student.phone },
    { icon: '✅', label: 'Status', value: student.status },
    { icon: '📅', label: 'Enrollment Year', value: student.enrollmentYear }
  ];

  return (
    <div className="student-container">
      <div className="student-card">
        <div className="card-header">
          <div className="header-decoration"></div>
          
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <img 
                src={student.profileImage} 
                alt={student.name}
                className="profile-image"
              />
              <div className="status-badge">{student.status}</div>
            </div>
            <h1 className="student-name">{student.name}</h1>
            <p className="student-major">{student.department}</p>
          </div>
        </div>

        <div className="student-info">
          <div 
            className="info-grid-section"
            onMouseEnter={() => setHoveredSection('academic')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className="section-title">📖 Academic Details</h2>
            <div className="info-grid">
              {academicDetails.map((item, index) => (
                <div key={index} className="info-card">
                  <div className="icon">{item.icon}</div>
                  <div className="card-content">
                    <p className="card-label">{item.label}</p>
                    <p className="card-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="info-grid-section"
            onMouseEnter={() => setHoveredSection('contact')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className="section-title">📋 Contact & Status</h2>
            <div className="info-grid">
              {contactDetails.map((item, index) => (
                <div key={index} className="info-card">
                  <div className="icon">{item.icon}</div>
                  <div className="card-content">
                    <p className="card-label">{item.label}</p>
                    <p className="card-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
