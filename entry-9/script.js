// Select the album container and shuffle button
const albumContainer = document.getElementById('album-container');
const shuffleBtn = document.getElementById('shuffle-btn');

// Album data: images and descriptions
const albums = [
    {
        cover: "images/1.png",
        title: "春游",
        description: "1 早上好 04:20 2 Monday (feat. Lionman) 04:26..."
    },
    {
        cover: "images/2.png",
        title: "MGMT",
        description: "Surreal lyrics and electro-indie beats."
    },
    {
        cover: "images/3.png",
        title: "Tame Impala",
        description: "Hypnotic vibes and psychedelic rock tunes."
    },
    {
        cover: "images/4.png",
        title: "Beach House",
        description: "Dreamy melodies with a touch of mystery."
    },
    {
        cover: "images/5.png",
        title: "Mac DeMarco",
        description: "Chill, lo-fi indie rock for wandering minds."
    }
];


// Function to load a random album
function loadRandomAlbum() {
    // Randomly select an album
    const randomIndex = Math.floor(Math.random() * albums.length);
    const album = albums[randomIndex];

    // Update the album container with the selected album
    albumContainer.innerHTML = `
        <img src="${album.cover}" alt="${album.title}">
        <div class="overlay">
            <h2>${album.title}</h2>
            <p>${album.description}</p>
        </div>
    `;
}

// Event listener for the shuffle button
shuffleBtn.addEventListener('click', loadRandomAlbum);

// Load an initial album on page load
loadRandomAlbum();