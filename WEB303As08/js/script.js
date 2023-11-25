
$(document).ready(function() {
    // Load character data from JSON file and populate the table
    $.getJSON('characters.json', function(characters) {
        var tableContent = '';
        $.each(characters, function(index, character) {
            tableContent += '<tr>';
            tableContent += '<td>' + character.firstName + '</td>';
            tableContent += '<td>' + character.lastName + '</td>';
            tableContent += '<td>' + character.house + '</td>';
            tableContent += '<td>' + character.role + '</td>';
            tableContent += '<td>' + character.patronus + '</td>';
            tableContent += '</tr>';
        });
        $('#charactersTable tbody').html(tableContent);

        // Update filter buttons count
        updateFilterCounts(characters);
    });

    // Search functionality
    $('#searchInput').on('keyup', function() {
        var searchTerm = $(this).val().toLowerCase();
        $('#charactersTable tbody tr').filter(function() {
            $(this).toggle($(this).find('td:first').text().toLowerCase().indexOf(searchTerm) > -1)
        });
    });

    // Filter buttons functionality
    $('#filterAM').on('click', function() {
        filterByLastName('A', 'M');
    });
    $('#filterNZ').on('click', function() {
        filterByLastName('N', 'Z');
    });

    // Function to update filter buttons count
    function updateFilterCounts(characters) {
        var countAM = 0, countNZ = 0;
        $.each(characters, function(index, character) {
            if (character.lastName[0].toUpperCase() >= 'A' && character.lastName[0].toUpperCase() <= 'M') {
                countAM++;
            } else {
                countNZ++;
            }
        });
        $('#filterAM').text('A - M (' + countAM + ')');
        $('#filterNZ').text('N - Z (' + countNZ + ')');
    }

    // Function to filter characters by last name
    function filterByLastName(startLetter, endLetter) {
        $('#charactersTable tbody tr').filter(function() {
            var lastNameFirstLetter = $(this).find('td:nth-child(2)').text()[0].toUpperCase();
            $(this).toggle(lastNameFirstLetter >= startLetter && lastNameFirstLetter <= endLetter);
        });
    }
});
