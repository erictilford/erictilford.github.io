$(document).ready(function () {
    
    function BuildSettings() {

        let settingsContainer = $("#commander-checkboxes");
        
        headers.forEach((header, index) => {
            let settingRow = '<div class="setting-row">';
            let disabled = "";
            if (index <= 1) {
                disabled = "disabled";
            }
            settingRow += `<label><input type="checkbox" name="header" value="${header}" checked ${disabled} id="settings-checkbox-${index}" class="settings-checkbox"> ${header}</label>`;
            settingsContainer.append(settingRow);
        });

        $(".settings-checkbox").on("change", function () {
            BuildTable();
        });
    }
    BuildSettings();

    function BuildTable() {

    


        // Clear thead and tbody before building the table
        let thead = $("#myTable thead");
        let tbody = $("#myTable tbody");
        let colgroup = $("#myTable colgroup");
        thead.empty();
        tbody.empty();
        colgroup.empty();




        // Add headers to the thead of #myTable
        let headerRow = "<tr>";
        headers.forEach((header, index) => {
            if ($(`#settings-checkbox-${index}`).is(":checked")) {
                headerRow += `<th>${header}</th>`;
            }
        });
        headerRow += "</tr>";
        thead.append(headerRow);

        // Add rows to the tbody of #myTable
        commanders.forEach(commander => {
            let row = "<tr>";

            // Replace mana symbols with their respective images
            

            row += `<td>${commander.commander}</td>`;

            let color = commander.color
                .replace(":u:", `<img src="assets/manau.png" alt="Blue Mana" class="mana-symbol">`)
                .replace(":b:", `<img src="assets/manab.png" alt="Black Mana" class="mana-symbol">`)
                .replace(":r:", `<img src="assets/manar.png" alt="Red Mana" class="mana-symbol">`)
                .replace(":g:", `<img src="assets/manag.png" alt="Green Mana" class="mana-symbol">`)
                .replace(":w:", `<img src="assets/manaw.png" alt="White Mana" class="mana-symbol">`);

            row += `<td>${color}</td>`;
            row += `<td>${commander.edhrecrank}</td>`;

            if ( $("#settings-checkbox-2").is(":checked") ) {
                row += `<td>${commander.owner}</td>`;
            }
            if ( $("#settings-checkbox-3").is(":checked") ) {
                row += `<td>${commander.type}</td>`;
            }
            if ( $("#settings-checkbox-4").is(":checked") ) {
                row += `<td>${commander.status}</td>`;
            }
            row += "</tr>";
            tbody.append(row);
        });
    }
    BuildTable();
    
    //$("#settings-pane").show();

    // Initialize DataTable
    $(document).ready(function () {
        
        $('#myTable').DataTable({
            "pageLength": 25
        });
    });

    function ToggleSettings() {
        $("#settings-pane").toggle(300); // Toggles visibility of the #settings-pane
    }
    $("#settings-icon").on("click", ToggleSettings);

});