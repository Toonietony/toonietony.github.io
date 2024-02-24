// promopt users for name
function promptUser() {
    var userName = prompt("What is your name?:");
    if (userName !== null && userName !== "") { //check for input of user entered 
        document.getElementById("output").innerHTML = "Hello, " + userName + "!"; //greets input of user 
    }
}

// enlarges image when clicked
function enlargeImage() {
    var image = document.getElementById("myImage");
    image.style.width = "200px"; // adjusting image size
}

//mouseover navigation
function mouseoverEvent(element) {
    element.style.backgroundColor = "#1069c2"; // change background colour of mouseover
}
function mouseoutEvent(element) {=
    element.style.backgroundColor = ""; // removing background of mousecourser 
}