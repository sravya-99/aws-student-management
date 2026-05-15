document
    .getElementById("studentForm")
    .addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values

    const name = document.querySelector(
        'input[placeholder="Enter Student Name"]'
    ).value;

    const roll = document.querySelector(
        'input[placeholder="Enter Roll Number"]'
    ).value;

    const department = document.querySelector("select").value;

    const email = document.querySelector(
        'input[placeholder="Enter Email Address"]'
    ).value;

    // Validation

    if (
        name === "" ||
        roll === "" ||
        department === "" ||
        email === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    // Get table body

    const tableBody = document.querySelector("tbody");

    // Create new row

    const newRow = document.createElement("tr");

    // Insert student details

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${department}</td>
        <td>${email}</td>
    `;

    // Add row to table

    tableBody.appendChild(newRow);

    // Update dashboard count

    const totalStudentsCard =
        document.querySelector(".card h2");

    let count = parseInt(totalStudentsCard.innerText);

    totalStudentsCard.innerText = count + 1;

    // Success alert

    alert("Student Registered Successfully");

    // Reset form

    document.getElementById("studentForm").reset();

});