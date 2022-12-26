const imageList = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
    "image11.jpg",
    "image12.jpg",
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
    var index = currentStatus - 1;
    const imageUrl = "images/image" + index.toString();
    document.getElementById("image-body").style.backgroundImage = imageUrl;
}
