// PUSHES PAGE 1 PAGE

var xhr = new XMLHttpRequest();
xhr.open("GET", "home.html");
xhr.onload = function() {
    document.getElementById("landing").innerHTML = this.response;
};

xhr.send();

// PUSHES PAGE 2 PAGE

var xhr = new XMLHttpRequest();
xhr.open("GET", "works.html");
xhr.onload = function() {
    document.getElementById("work").innerHTML = this.response;
};

xhr.send();

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

// PUSHES PAGE 3 PAGE

var xhr = new XMLHttpRequest();
xhr.open("GET", "team.html");
xhr.onload = function() {
    document.getElementById("team").innerHTML = this.response;
};
xhr.send();