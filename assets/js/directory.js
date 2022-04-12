// START SEARCH BUTTON
$("#search-btn").on("click tap", function(e) {
    e.preventDefault();
    filterBySearch();
});

function filterBySearch() {
    const term = $("#search-product").val().toLowerCase();
    let results = $(".card");
    if (term.length > 0) {
        results = results.filter(function(e) {
            return $(this).html().toLowerCase().indexOf(term) !== -1;
        });
    }
    results.show();
    $(".card").not(results).hide();
}

$('#search-product').on('input', function(e) {
    e.preventDefault();
    filterBySearch();
});

$('#clear-search-btn').on('click tap', function(e) {
    e.preventDefault();
    $("#search-product").val('').trigger('input');
});

// END SEARCH BUTTON

// START SHUFFLE

$("#content").html($(".card").sort(function() {
    return Math.random() - 0.5;
}));

// END SHUFFLE