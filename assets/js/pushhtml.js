// PUSHES PAGE 1 PAGE

var xhr = new XMLHttpRequest();
xhr.open("GET", "home.html");
xhr.onload = function() {
    document.getElementById("landing").innerHTML = this.response;

    // START TYPER
    var typeText = document.querySelector(".typeText")
    var textToBeTyped = "a software engineer"
    var textToBeTypedArr = ["Product Designer", "Front end Developer", "vFX & Motion Designer", "a Full stack Designer 🦄"]
    var index = 0,
        isAdding = true,
        textToBeTypedIndex = 0

    function playAnim() {
        setTimeout(function() {
            // set the text of typeText to a substring of the text to be typed using index.
            typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
            if (isAdding) {
                // adding text
                if (index > textToBeTypedArr[textToBeTypedIndex].length) {
                    // no more text to add
                    isAdding = false
                    typeText.classList.add("showAnim")
                        //break: wait 2s before playing again
                    setTimeout(function() {
                        typeText.classList.remove("showAnim")
                        playAnim()
                    }, 2000)
                    return
                } else {
                    // increment index by 1
                    index++
                }
            } else {
                // removing text
                if (index === 0) {
                    // no more text to remove
                    isAdding = true
                        //switch to next text in text array
                    textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
                } else {
                    // decrement index by 1
                    index--
                }
            }
            // call itself
            playAnim()
        }, isAdding ? 90 : 30)
    }
    // start animation
    playAnim()
        // END TYPER
};

xhr.send();

// PUSHES PAGE 2 PAGE

var xhr = new XMLHttpRequest();
xhr.open("GET", "portfolio.html");
xhr.onload = function() {
    document.getElementById("portfolio").innerHTML = this.response;

    // START TABS CLASS

    let tabs = [...document.getElementsByClassName("tab")];
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function(e) {
            e.preventDefault();
            tabs.forEach(link => link.classList.remove("tab-active"));
            this.classList.add("tab-active");
        });
    };
    // END TABS CLASS
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
xhr.open("GET", "about.html");
xhr.onload = function() {
    document.getElementById("about").innerHTML = this.response;

    // START EXPANDABLE
    var reveal = document.getElementsByClassName("reveal");
    var i;

    for (i = 0; i < reveal.length; i++) {
        reveal[i].addEventListener("click", function() {
            this.classList.toggle("expanded");
            var hidden = this.nextElementSibling;
            if (hidden.style.display === "block") {
                hidden.style.display = "none";
            } else {
                hidden.style.display = "block";
            }
        });
    }
    // END EXPANDABLE
};
xhr.send();