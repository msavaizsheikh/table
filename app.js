
function generateTable() {
    let number = document.getElementById("numberInput").value;
    let tableContainer = document.getElementById("tableContainer");

    tableContainer.innerHTML = "";

    if (number === "") {
        alert("Please enter a number");
        return;
    }

    let table = document.createElement("table");

    for (let i = 1; i <= 10; i++) {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.textContent = number;
        cell2.textContent = "x";
        cell3.textContent = i;
        row.insertCell(3).textContent = "=";
        row.insertCell(4).textContent = number * i;
    }

    tableContainer.appendChild(table);
}
