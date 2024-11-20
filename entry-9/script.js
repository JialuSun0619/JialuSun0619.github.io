// DOM elements
const albumTitle = document.getElementById("album-title");
const coverImage = document.getElementById("cover-image");
const artistName = document.getElementById("artist-name");
const nextAlbumButton = document.getElementById("next-album");

// Data: Array of album information
const albums = [
    {
        title: "Antidotes",
        artist: "Foals",
        cover: "1.jpg",
    },
    {
        title: "Is This It",
        artist: "The Strokes",
        cover: "2.jpg",
    },
    {
        title: "An Awesome Wave",
        artist: "Alt-J",
        cover: "3.jpg",
    },
    {
        title: "Young the Giant",
        artist: "Young the Giant",
        cover: "4.jpg",
    },
    {
        title: "The 1975",
        artist: "The 1975",
        cover: "5.jpg",
    },
];

// Function to load a random album
function loadRandomAlbum() {
    const randomIndex = Math.floor(Math.random() * albums.length);
    const album = albums[randomIndex];

    // Dynamically update the content
    albumTitle.textContent = album.title;
    artistName.textContent = album.artist;
    coverImage.src = album.cover;
    coverImage.alt = `${album.title} Album Cover`;

    // Apply a random border style for visual variety
    const randomBorderStyle = ["solid", "dashed", "double", "groove"];
    const randomBorderColor = ["#FF48FF", "#3AB4FF", "#FFDF37", "#6EA02F"];
    const randomStyleIndex = Math.floor(Math.random() * randomBorderStyle.length);

    coverImage.style.border = `4px ${randomBorderStyle[randomStyleIndex]} ${randomBorderColor[randomStyleIndex]}`;
}

// Event listener for the "Next Album" button
nextAlbumButton.addEventListener("click", loadRandomAlbum);

// Load an initial random album on page load
loadRandomAlbum();