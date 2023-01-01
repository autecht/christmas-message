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
var textList = [
    "I see you!",
    "Let me up there!",
    "Guarding the Property",
    "Let us in!",
    "There's something under there. . .",
    "Pets please!",
    "She's dangerous!",
    "Naptime!",
    "Winding down after a long day!",
    "If I don't move, you can't see me",
    "After a rager",
    "Move out!",
]

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
        window.location.assign("https://autecht.github.io/christmas-message/");
        return;
    }
    if ((currentStatus == 1) || (currentStatus == 12)) {
        window.location.assign("https://autecht.github.io/christmas-message/images.html"); 
    }
}

function changeImage() {
    var imageIndex = currentStatus - 1;
    document.body.style.backgroundImage = 'url(' + imageList[imageIndex] + ')';
    document.getElementById("bottom-text").innerHTML = textList[imageIndex];
}

function resetCurrentStatus() {
    currentStatus = 0
    sessionStorage.currentStatus = "0"
}
