interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Salman",
  lastName: "Faaris",
  age: 60,
  location: "Iraq",
};

const student2: Student = {
  firstName: "Abdullah",
  lastName: "Masuud",
  age: 56,
  location: "Madinah",
};

const studentsList: Array<Student> = [student1, student2];

window.onload = function() {
  const table = document.createElement("table");
  
  // Create table header row
  const headerRow = document.createElement("tr");
  const header = ["First Name", "Location"];

  header.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  // Create table body
  const tableBody = document.createElement("tbody");

  studentsList.forEach(({ firstName, location }) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = firstName;
    const locationCell = document.createElement("td");
    locationCell.textContent = location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });

  // Append table body to table
  table.appendChild(tableBody);

  // Append table to body
  document.body.appendChild(table);
};
