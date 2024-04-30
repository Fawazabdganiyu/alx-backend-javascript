const fs = require('fs');

function countStudents(fileName) {
  if (!fs.existsSync(fileName)) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(fileName, 'utf8');

  const record = {};

  const lines = data.split('\n').filter((line) => line.trim() !== '');
  const students = lines.slice(1);

  for (let student of students) {
    student = student.split(',');
    const firstName = student[0];
    const field = student[student.length - 1];

    if (!record[field]) {
      record[field] = { names: [] };
    }
    record[field].names.push(firstName);
  }

  console.log(`Number of students: ${students.length}`);

  for (const field in record) {
    if (record[field]) {
      const { names } = record[field];
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  }
}

module.exports = countStudents;
