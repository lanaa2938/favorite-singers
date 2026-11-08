// JSON array containing favorite singers data
const singersData = [
  {
    singer: "Beyoncé Knowles",
    dob: "9/4/1981",
    bestSongs: "Halo, Crazy in Love"
  },
  {
    singer: "Olivia Isabel Rodrigo",
    dob: "2/20/2003",
    bestSongs: "Drivers License, Good 4 U"
  },
  {
    singer: "Summer Marjani Walker",
    dob: "4/11/1996",
    bestSongs: "Girls Need Love, Playing Games"
  },
  {
    singer: "Alicia Augello Keys",
    dob: "1/25/1981",
    bestSongs: "No One, If I Ain't Got You"
  }
];

// Function to populate the Bootstrap table when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("singers-table-body");

  // Loop through the array of singer objects
  singersData.forEach(person => {
    // Create a new table row element
    const row = document.createElement("tr");

    // Populate the row HTML with singer details
    row.innerHTML = `
      <td>${person.singer}</td>
      <td>${person.dob}</td>
      <td>${person.bestSongs}</td>
    `;

    // Append the row to the table body
    tableBody.appendChild(row);
  });
});