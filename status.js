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
// document.getElementById("image-body").style.backgroundImage = imageList[3];

/*
 * represents what page/image user is on
 * 0 represents homepage, 1-12 represents image
 */
// var someVarName = "value";
// localStorage.setItem("someVarKey", someVarName);
// And in any page (like when the page has loaded), get it like:

// var someVarName = localStorage.getItem("someVarKey");
// TODO: Error here

var currentStatus;

if (sessionStorage.getItem("currentStatus") == null) {
    currentStatus = 0;
}
else {
    currentStatus = parseInt(sessionStorage.getItem("currentStatus"));
}
// console.log(currentStatus)

function cycleLeft() {
    currentStatus -= 1;
    if (currentStatus < 0) {
        currentStatus = 12;
    }
    changePage();
    changeImage();
}

function cycleRight() {
    currentStatus += 1;
    currentStatus %= 13;
    changePage();
    changeImage()
}

function changePage() {
    sessionStorage.currentStatus = currentStatus.toString();
    if (currentStatus == 0) {
        window.location.assign("file:///C:/Users/atodd/repos/christmas-message/index.html");
        return;
    }
    if ((currentStatus == 1) || (currentStatus == 12)) {
        window.location.assign("file:///C:/Users/atodd/repos/christmas-message/images.html"); 
    }
}

function changeImage() {
    var imageIndex = currentStatus - 1;
    document.body.style.backgroundImage = 'url(' + imageList[imageIndex] + ')';
}

function resetCurrentStatus() {
    currentStatus = 0
    sessionStorage.currentStatus = "0"
}
