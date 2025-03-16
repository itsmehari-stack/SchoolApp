import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/student.css"

const StudentDashboard = () => {
  const navigate = useNavigate();

  // Dummy Data (Replace with API data in real app)
  const studentData = {
    name: "John Doe",
    class: "10th Grade",
    classTeacher: {
      name: "Mrs. Emily Johnson",
      email: "emily.johnson@example.com",
      subject: "Mathematics",
    },
    scores: [
      { subject: "Mathematics", score: 95 },
      { subject: "Science", score: 88 },
      { subject: "History", score: 76 },
      { subject: "English", score: 82 },
    ],
  };

  return (
    <div className="student-container">
      <h2 className="student-title">Welcome, {studentData.name}</h2>
      <div className="teacher-info">
        <h3>Class Teacher Details</h3>
        <p><strong>Name:</strong> {studentData.classTeacher.name}</p>
        <p><strong>Email:</strong> {studentData.classTeacher.email}</p>
        <p><strong>Subject:</strong> {studentData.classTeacher.subject}</p>
      </div>
      
      <h3>Scores in All Subjects</h3>
      <table className="score-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {studentData.scores.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="back-button" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
};

export default StudentDashboard;
