$(document).ready(function () {

    // Add headers to the thead of #myTable
    let thead = $("#myTable thead");
    let headerRow = "<tr>";

    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });

    headerRow += "</tr>";
    thead.append(headerRow);

    // Add rows to the tbody of #myTable
    let tbody = $("#myTable tbody");
    commanders.forEach(commander => {
        let row = "<tr>";
        row += `<td>${commander.commander}</td>`;
        row += `<td>${commander.edhrecrank}</td>`;
        row += `<td>${commander.owner}</td>`;
        //row += `<td>${commander.type}</td>`;
        //row += `<td>${commander.status}</td>`;
        row += "</tr>";
        tbody.append(row);
    });

    // Initialize DataTable
    // let table = new DataTable('#myTable');

    $(document).ready(function() {
        $('#myTable').DataTable({
            "pageLength": 50
        });
    });
});