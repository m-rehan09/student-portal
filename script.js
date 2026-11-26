const form = document.getElementById("studentForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const rollNo = document.getElementById("rollNo").value;
    const course = document.getElementById("course").value;

    output.style.display = "block";
    output.innerHTML = `
        <strong>Saved Details:</strong><br>
        Name: ${name}<br>
        Roll No: ${rollNo}<br>
        Course: ${course}
    `;

    form.reset();
});