const albumContainer = document.getElementById("album-container");
const albumCover = document.getElementById("album-cover");
const albumAudio = document.getElementById("album-audio");
const albumTitle = document.getElementById("album-title");
const albumArtist = document.getElementById("album-artist");

const albumData = [
    { cover: "1.png", audio: "1.mp3", title: "Phoenix: Flames Are Dew Upon My Skin", artist: "Eartheater" },
    { cover: "2.png", audio: "2.mp3", title: "爱神", artist: "Wen Zhaojie" },
    { cover: "3.png", audio: "3.mp3", title: "Fann", artist: "Fann" },
    { cover: "4.png", audio: "4.mp3", title: "极乐大厦揭幕", artist: "八仙飯店" },
    { cover: "5.png", audio: "5.mp3", title: "Flow", artist: "Naiwen Yang" }
];

const colors = ["#00FF00", "#FF00FF", "#00FFFF", "#FFFF00", "#FF5733"];

let currentIndex = Math.floor(Math.random() * albumData.length);

// Function to load an album by index
function loadAlbum(index) {
    const album = albumData[index];
    albumCover.src = album.cover;
    albumAudio.src = album.audio;
    albumTitle.innerText = album.title;
    albumArtist.innerText = album.artist;

    // Random background and border colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    albumContainer.style.borderColor = randomColor;
    albumContainer.style.transform = `rotate(${Math.floor(Math.random() * 30) - 15}deg) scale(${Math.random() * 0.4 + 0.8})`;

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