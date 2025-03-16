import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/teacher.css";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  // Dummy Data (Replace with API data in real app)
  const teacherData = {
    name: "Mrs. Emily Johnson",
    subject: "Mathematics",
    class: "10th Grade",
    students: [
      { id: 1, name: "John Doe", scores: { Mathematics: 95, Science: 88, English: 80 } },
      { id: 2, name: "Alice Smith", scores: { Mathematics: 78, Science: 85, English: 90 } },
      { id: 3, name: "Bob Johnson", scores: { Mathematics: 92, Science: 89, English: 84 } },
    ],
  };

  return (
    <div className="teacher-container">
      <h2 className="teacher-title">Welcome, {teacherData.name}</h2>
      <div className="class-info">
        <p><strong>Class:</strong> {teacherData.class}</p>
        <p><strong>Subject:</strong> {teacherData.subject}</p>
      </div>

      <h3>Students' Scores</h3>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mathematics</th>
            <th>Science</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {teacherData.students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.scores.Mathematics}</td>
              <td>{student.scores.Science}</td>
              <td>{student.scores.English}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="logout-button" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
};

export default TeacherDashboard;
