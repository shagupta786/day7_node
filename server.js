const express = require('express');
const app = express();
const PORT = 3000;

// Hardcoded students data
const students = [
  { id: 1, name: 'Shagupta', course: 'Express.js' },
  { id: 2, name: 'shifa', course: 'Node.js' },
  { id: 3, name: 'Anika', course: 'React' }
];

// Route with route parameter
app.get('/student/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(s => s.id === studentId);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});