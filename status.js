const imageList = [
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
var currentStatus = 0; // homepage

function cycleLeft() {
    currentStatus -= 1;
    currentStatus %= 12;
    changePage(currentStatus);
}

function cycleRight() {
    currentStatus += 1;
    currentStatus %= 12;
    changePage(currentStatus);
}

function changePage(currentStatus) {
    if (currentStatus == 0) {
        window.location.assign("https://autecht.github.io/index.html");
        return;
    }

    if ((currentStatus == 1) || (currentStatus == 12)) {
        window.location.assign("https://autecht.github.io/christmas-message/images.html"); 
    }
    var imageIndex = currentStatus - 1;
    document.getElementById("image-body").style.backgroundImage = imageList[imageIndex];
}
