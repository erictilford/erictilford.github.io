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

        // Replace mana symbols with their respective images
        let commanderName = commander.commander
            .replace(":u:", `<img src="assets/manau.png" alt="Blue Mana" class="mana-symbol">`)
            .replace(":b:", `<img src="assets/manab.png" alt="Black Mana" class="mana-symbol">`)
            .replace(":r:", `<img src="assets/manar.png" alt="Red Mana" class="mana-symbol">`)
            .replace(":g:", `<img src="assets/manag.png" alt="Green Mana" class="mana-symbol">`)
            .replace(":w:", `<img src="assets/manaw.png" alt="White Mana" class="mana-symbol">`);

        row += `<td>${commanderName}</td>`;
        row += `<td>${commander.edhrecrank}</td>`;
        row += `<td>${commander.owner}</td>`;
        //row += `<td>${commander.type}</td>`;
        //row += `<td>${commander.status}</td>`;
        row += "</tr>";
        tbody.append(row);
    });

    // Initialize DataTable
    $(document).ready(function() {
        $('#myTable').DataTable({
            "pageLength": 50
        });
    });
});