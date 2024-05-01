const fs = require('fs').promises;
const express = require('express');

async function countStudents(fileName) {
  let data = '';
  try {
    data = await fs.readFile(fileName, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

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
  const output = [];
  output.push(`Number of students: ${students.length}`);

  for (const field in record) {
    if (record[field]) {
      const { names } = record[field];
      output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  }

  return output.join('\n');
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const fileName = process.argv[2];

  try {
    const studentsData = await countStudents(fileName);
    res.status(200).send(`This is the list of our students\n${studentsData}`);
  } catch (err) {
    res.status(404).send(`This is the list of our students\n${err.message}`);
  }
});

app.listen(port);

module.exports = app;
