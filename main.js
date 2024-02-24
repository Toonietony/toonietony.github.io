// promopt users for name
function promptUser() {
    var userName = prompt("What is your name?:");
    if (userName !== null && userName !== "") {
        document.getElementById("output").innerHTML = "Hello, " + userName + "!";
    }
}

// enlarges image when clicked
function enlargeImage() {
    var image = document.getElementById("myImage");
    image.style.width = "200px"; // adjusting image size
}

// Event handler for mouseover event on navigation items
function mouseoverEvent(element) {
    element.style.backgroundColor = "#1069c2"; // chang background colour of mouseover
}

// Event handler for mouseout event on navigation items
function mouseoutEvent(element) {
    element.style.backgroundColor = ""; // Remove background color on mouseout
}