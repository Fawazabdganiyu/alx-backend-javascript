const fs = require('fs').promises;
const http = require('http');

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

const port = 1245;
const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!')
  } else if (req.url === '/students') {
    const fileName = process.argv[2];

    res.write('This is the list of our students\n');
    countStudents(fileName)
      .then((studentsData) => {
        res.statusCode = 200;
        res.end(studentsData);
      })
      .catch((err) => {
        res.statusCode = 404;
        res.end(err.message);
      });
  }
});

app.listen(port);

module.exports = app;
