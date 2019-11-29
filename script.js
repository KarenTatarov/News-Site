$(function() {
    $(document).ready(function() {
        $.get('http://data.fixer.io/latest,
            {'access_key': 'f35e4b88c9c276fc9862312fa8939f02'},
            function(response) {
                $('#usd').text(response.rates.RUB/response.rates.USD);
                $('#euro').text(response.rates.RUB);
            },
        );
    });
});