// JavaScript for random album selection and autoplay

const albumContainer = document.getElementById("album-container");
const albumCover = document.getElementById("album-cover");
const albumAudio = document.getElementById("album-audio");

// List of album cover images and audio files
const albumData = [
    { cover: "1.png", audio: "1.mp3" },
    { cover: "2.png", audio: "2.mp3" },
    { cover: "3.jpg", audio: "3.mp3" },
    { cover: "4.jpg", audio: "4.mp3" },
    { cover: "5.jpg", audio: "5.mp3" }
];

// Current album index
let currentIndex = Math.floor(Math.random() * albumData.length);

// Function to load an album by index
function loadAlbum(index) {
    const album = albumData[index];
    albumCover.src = album.cover;
    albumAudio.src = album.audio;

    // Fade-in effect for album cover
    albumCover.style.opacity = 0;
    setTimeout(() => {
        albumCover.style.opacity = 1;
    }, 100);
}

// Function to play the next album
function nextAlbum() {
    currentIndex = (currentIndex + 1) % albumData.length;
    loadAlbum(currentIndex);
}

// Auto-play the next album every 10 seconds
setInterval(nextAlbum, 10000);

// Load initial album
loadAlbum(currentIndex);