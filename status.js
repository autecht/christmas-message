var imageList = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg",
    "images/image10.jpg",
    "images/image11.jpg",
    "images/image12.jpg",
];
/*
 * represents what page/image user is on
 * 0 represents homepage, 1-12 represents image
 */
// var someVarName = "value";
// localStorage.setItem("someVarKey", someVarName);
// And in any page (like when the page has loaded), get it like:

// var someVarName = localStorage.getItem("someVarKey");
// TODO: Error here
if (sessionStorage.getItem("currentStatus") == null) {
    var currectStatus = 0;
}
else {
    alert("hi");
    var currentStatus = parseInt(sessionStorage.getItem("currentStatus"));
}

function cycleLeft() {
    currentStatus -= 1;
    if (currentStatus < 0) {
        currentStatus = 12;
    }
    changePage(currentStatus);
}

function cycleRight() {
    currentStatus += 1;
    currentStatus %= 13;
    changePage(currentStatus);
}

function changePage(newStatus) {
    alert(newStatus);
    if (newStatus == 0) {
        window.location.assign("file:///C:/Users/atodd/repos/christmas-message/index.html");
        return;
    }

    if ((newStatus == 1) || (newStatus == 12)) {
        window.location.assign("file:///C:/Users/atodd/repos/christmas-message/images.html"); 
    }
    var imageIndex = newStatus - 1;
    localStorage.currentStatus = currentStatus.toString();
    document.getElementById("image-body").style.backgroundImage = imageList[imageIndex];
}

function load() {
    }