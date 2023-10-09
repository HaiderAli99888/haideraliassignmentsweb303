/*
    Assignment #4
    Haider Ali
*/

$(function () {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        return;
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        $("#locationhere").text(`Current Location: Lat: ${latitude}, Long: ${longitude}`);
        $("#accuracy").text(`Accuracy: ${position.coords.accuracy} meters`);

        const previousLocation = localStorage.getItem("location");

        if (previousLocation) {
            const oldLocation = JSON.parse(previousLocation);
            $("#previousLocation").text(`Previous Location: Lat: ${oldLocation.latitude}, Long: ${oldLocation.longitude}`);
            $("#welcomeMessage").text('Welcome back!');

            const distance = calcDistanceBetweenPoints(
                oldLocation.latitude, oldLocation.longitude,
                latitude, longitude
            );
            $("#distanceMessage").text(`You traveled ${(distance / 1000).toFixed(2)} km since your last visit.`);
        } else {
            $("#welcomeMessage").text('Welcome to the page for the first time.');
        }

        localStorage.setItem("location", JSON.stringify({ latitude, longitude }));
    }

    function error() {
        alert('Unable to retrieve your location');
    }

    navigator.geolocation.getCurrentPosition(success, error);

    // Existing function - DO NOT EDIT
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in meters
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});



