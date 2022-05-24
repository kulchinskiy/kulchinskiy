// START BURGER MENU
function mobileMenu() {
    var x = document.getElementById("mobilemenuItems");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// END BURGER MENU

// START SEARCH
function searchFilter() {
    console.log("This works");
    // Declare variables
    var input, filter, section, item, info, i, txtValue;
    input = document.getElementById('search-item');
    filter = input.value.toUpperCase();
    section = document.getElementById("works");
    item = section.getElementsByTagName('a');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < item.length; i++) {
        info = item[i].getElementsByClassName("card_info")[0];
        txtValue = info.textContent || info.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        } else {
            item[i].style.display = "none";
        }
    }
}
// END SEARCH

// START LOAD PAGES

function loadHtml(id, filename) {
    console.log(`div id: ${id}, filename: ${filename}`);

    let xhttp;
    let element = document.getElementById(id);
    let file = filename;

    if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {

            if (this.readyState == 4) {
                if (this.status == 200) { element.innerHTML = this.responseText; }
                if (this.status == 404) { element.innerHTML = "<h1>Page not found.</h1>"; }
            }
        }
        xhttp.open("GET", `pages/${file}`, true);
        xhttp.send();
        return;
    }
}

// END LOAD PAGES


function loadWorkItem(id, filename) {

    let subheader = document.getElementsByClassName("sub-header");

    if (subheader[0].classList.contains("invisible")) {
        subheader[0].classList.remove("invisible");
    } else {
        subheader[0].classList.add("invisible");
    }
    loadHtml(id, filename);

}