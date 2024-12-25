let totalPoints = 0;
let totalCredits = 0;


function calculateGPA() {
    const courseName = document.getElementById('courseName').value;
    const courseCode = document.getElementById('courseCode').value;
    const credits = parseInt(document.getElementById('credits').value, 10);
    const gradeValue = parseInt(document.getElementById('grade').value, 10);
    const gradeText = document.getElementById('grade').selectedOptions[0].text;

    totalPoints += credits * gradeValue;
    totalCredits += credits;

    let GPA = totalPoints / totalCredits;

    document.getElementById('result').innerText = `Your GPA is: ${GPA.toFixed(2)}`;

    // Add the course to the table
    addCourseToTable(courseName, courseCode, credits, gradeText);

    // Clear fields for next entry
    document.getElementById('courseName').value = '';
    document.getElementById('courseCode').value = '';
    document.getElementById('credits').value = '';
    document.getElementById('grade').value = '9';
}

function addCourseToTable(courseName, courseCode, credits, grade) {
    // Get the table body
    const tableBody = document.getElementById('courses-table').getElementsByTagName('tbody')[0];
    
    // Create a new row
    const newRow = tableBody.insertRow();

    // Add the columns (cells) to the new row
    newRow.insertCell().innerText = courseName;
    newRow.insertCell().innerText = courseCode;
    newRow.insertCell().innerText = credits;
    newRow.insertCell().innerText = grade;
}