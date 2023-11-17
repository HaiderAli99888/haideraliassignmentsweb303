// Wait until the HTML document is fully loaded and ready to be manipulated.
$(document).ready(function () {
    // Fetch the JSON data using an AJAX call.
    $.getJSON('character.json', function (data) {
        // Access the table body where the data rows will be appended.
        var tableBody = $('#characterTable tbody');

        // Loop through each character data in the JSON array.
        $.each(data, function (i, character) {
            // Create a new table row for each character.
            var row = $('<tr></tr>');

            // For each piece of character data, create a table cell and append it to the row.
            row.append('<td>' + character.firstName + '</td>');
            row.append('<td>' + character.lastName + '</td>');
            row.append('<td>' + character.dateOfBirth + '</td>');
            row.append('<td>' + character.occupation + '</td>');
            row.append('<td>' + character.affiliation + '</td>');

            // Append the complete row to the table body in the DOM.
            tableBody.append(row);
        });
    });

    // Attach a click event listener to the header of each sortable column.
    $('.sort-header').on('click', function (e) {
        // Prevent the default navigation behavior of anchor tags.
        e.preventDefault();

        // Retrieve which property of the data this column corresponds to.
        var sortKey = $(this).data('sort');

        // Find all the rows in the table for sorting.
        var table = $('#characterTable');
        var rows = table.find('tbody > tr').toArray().sort(comparer($(this).index()));

        // Determine if the current sort order should be ascending or descending.
        // The first click makes it ascending, second descending, third back to default.
        this.asc = !this.asc; // Toggle the boolean value with each click.

        // If the order is descending, reverse the sorted array of rows.
        if (!this.asc) {
            rows = rows.reverse();
        }

        // Re-insert each row back into the table in the new order.
        for (var i = 0; i < rows.length; i++) {
            table.append(rows[i]);
        }

        // Call a function to visually update the chevron icons according to the new sort order.
        updateChevrons($(this));
    });

    // This function creates a comparator for sorting table rows.
    // It is used in the array sort method above.
    function comparer(index) {
        return function (a, b) {
            // Extract the text values of the cells that are being compared.
            var valA = getCellValue(a, index), valB = getCellValue(b, index);

            // Determine whether the cell values are numeric or strings and compare accordingly.
            // Numeric values are compared directly, strings are compared lexicographically.
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB);
        };
    }

    // A utility function to get the text from a specific cell in a row.
    function getCellValue(row, index) {
        return $(row).children('td').eq(index).text();
    }

    // This function updates the direction of the chevron icon next to the table header.
    // It indicates whether the column is sorted in ascending or descending order.
    function updateChevrons(header) {
        // Initially hide all chevron icons.
        $('.chevron').addClass('hidden');

        // Find the chevron icon in the currently clicked header.
        var chevron = header.find('.chevron');

        // Make the chevron icon visible.
        chevron.removeClass('hidden');

        // Update the icon to point up or down based on the sorting order.
        // Ascending order is indicated by an up-pointing chevron, descending by a down-pointing chevron.
        if (header[0].asc) {
            chevron.html('&#x25B2;');
        } else {
            chevron.html('&#x25BC;');
        }
    }
});