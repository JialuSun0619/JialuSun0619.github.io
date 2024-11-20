// Select the album container and shuffle button
const albumContainer = document.getElementById('album-container');
const shuffleBtn = document.getElementById('shuffle-btn');

// Album data: images and descriptions
const albums = [
    {
        cover: "1.png",
        title: "春游",
        description: "1 早上好 04:20 2 Monday (feat. Lionman) 04:26, 3 北京！咖啡！02:26 4 橘子汽水 03:57 5 中場休息 02:32 6 狗熊 04:10 7 煙花 05:13 8 河流 04:53 9 Hello 05:42 同一片天空下."
    },
    {
        cover: "2.jpg",
        title: "MGMT",
        description: "Surreal lyrics and electro-indie beats."
    },
    {
        cover: "3.jpg",
        title: "Tame Impala",
        description: "Hypnotic vibes and psychedelic rock tunes."
    },
    {
        cover: "4.jpg",
        title: "Beach House",
        description: "Dreamy melodies with a touch of mystery."
    },
    {
        cover: "5.jpg",
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