var xhr = new XMLHttpRequest();
xhr.open("GET", "works.html");
xhr.onload = function() {
    document.getElementById("works").innerHTML = this.response;
};
xhr.send();