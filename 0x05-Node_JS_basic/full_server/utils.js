const fs = require('fs').promises;

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => {
        const record = {};

        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);

        for (let student of students) {
          student = student.split(',');
          const firstName = student[0];
          const field = student[student.length - 1];

          if (!record[field]) {
            record[field] = [];
          }
          record[field].push(firstName);
        }
        resolve(record);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

export default readDatabase;
