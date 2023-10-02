$(document).ready(function () {
    getTeamInfoWithAjax();
});

function getTeamInfoWithGetJSON() {
    $.getJSON('team.json', function (data) {
        $('#team').empty();
        $.each(data, function (key, val) {
            $('#team').append('<h2>' + val.name + '</h2><h5>' + val.position + '</h5><p>' + val.bio + '</p>');
        });
    });
}

function getTeamInfoWithAjax() {
    $.ajax({
        url: 'team.json',
        type: 'GET',
        beforeSend: function () {
            $('#team').text('Loading...');
        },
        error: function () {
            $('#team').text('Error: Content could not be retrieved.');
        },
        success: function (data) {
            setTimeout(function () {
                $('#team').empty();
                $.each(data, function (key, val) {
                    $('#team').append('<h2>' + val.name + '</h2><h5>' + val.position + '</h5><p>' + val.bio + '</p>');
                });
            }, 3000);
        }
    });
}
