import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "../../styles/principal.css";
import "chart.js/auto";

const PrincipalDashboard = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("10th Grade");

  // Dummy Data (Replace with API data in real app)
  const classes = ["10th Grade", "9th Grade"];
  const subjects = ["Mathematics", "Science", "English"];

  const studentsData = {
    "10th Grade": [
      { name: "John Doe", scores: { Mathematics: 85, Science: 78, English: 90 } },
      { name: "Alice Smith", scores: { Mathematics: 92, Science: 88, English: 75 } },
      { name: "Bob Johnson", scores: { Mathematics: 75, Science: 80, English: 85 } },
      { name: "Charlie Brown", scores: { Mathematics: 68, Science: 72, English: 70 } },
      { name: "David White", scores: { Mathematics: 95, Science: 92, English: 89 } },
    ],
    "9th Grade": [
      { name: "Eve Green", scores: { Mathematics: 78, Science: 82, English: 85 } },
      { name: "Frank Black", scores: { Mathematics: 88, Science: 90, English: 92 } },
      { name: "Grace Wilson", scores: { Mathematics: 70, Science: 65, English: 72 } },
    ],
  };

  // Compute Averages
  const getAverageScore = (subject) => {
    const students = studentsData[selectedClass];
    const total = students.reduce((acc, student) => acc + student.scores[subject], 0);
    return (total / students.length).toFixed(2);
  };

  // Get Top 3 and Bottom 3
  const getTopBottomScores = (subject, top = true) => {
    const sorted = [...studentsData[selectedClass]].sort(
      (a, b) => (top ? b.scores[subject] - a.scores[subject] : a.scores[subject] - b.scores[subject])
    );
    return sorted.slice(0, 3);
  };

  // Sort Students by Subject Score
  const [sortedSubject, setSortedSubject] = useState("");
  const sortedStudents = sortedSubject
    ? [...studentsData[selectedClass]].sort((a, b) => b.scores[sortedSubject] - a.scores[sortedSubject])
    : studentsData[selectedClass];

  // Chart Data
  const chartData = {
    labels: subjects,
    datasets: [
      {
        label: `Average Score in ${selectedClass}`,
        backgroundColor: ["#4b6cb7", "#ffcc00", "#ff5733"],
        borderWidth: 1,
        data: subjects.map((subject) => getAverageScore(subject)),
      },
    ],
  };

  return (
    <div className="principal-container">
      <h2 className="principal-title">Principal Dashboard</h2>

      <select className="class-select" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
        {classes.map((className) => (
          <option key={className} value={className}>{className}</option>
        ))}
      </select>

      <div className="stats-section">
        <h3>Average Score per Subject</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Average Score</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject}>
                <td>{subject}</td>
                <td>{getAverageScore(subject)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="stats-section">
        <h3>Top 3 Scores per Subject</h3>
        {subjects.map((subject) => (
          <div key={subject}>
            <h4>{subject}</h4>
            <ul>
              {getTopBottomScores(subject, true).map((student, index) => (
                <li key={index}>{student.name}: {student.scores[subject]}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="stats-section">
        <h3>Bottom 3 Scores per Subject</h3>
        {subjects.map((subject) => (
          <div key={subject}>
            <h4>{subject}</h4>
            <ul>
              {getTopBottomScores(subject, false).map((student, index) => (
                <li key={index}>{student.name}: {student.scores[subject]}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3>Sort Students by Subject</h3>
      <select className="class-select" onChange={(e) => setSortedSubject(e.target.value)}>
        <option value="">Select Subject</option>
        {subjects.map((subject) => (
          <option key={subject} value={subject}>{subject}</option>
        ))}
      </select>

      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>{sortedSubject}</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student) => (
            <tr key={student.name}>
              <td>{student.name}</td>
              <td>{sortedSubject ? student.scores[sortedSubject] : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="chart-container">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default PrincipalDashboard;
