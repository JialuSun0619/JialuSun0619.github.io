
const albumContainer = document.getElementById('album-container');
const shuffleBtn = document.getElementById('next-album');


const albums = [
    {
        cover: "1.png",
        title: "春游",
        description: "1 早上好 04:20 2 Monday (feat. Lionman) 04:26..."
    },
    {
        cover: "2.png",
        title: "MGMT",
        description: "Surreal lyrics and electro-indie beats."
    },
    {
        cover: "3.png",
        title: "Tame Impala",
        description: "Hypnotic vibes and psychedelic rock tunes."
    },
    {
        cover: "4.png",
        title: "Beach House",
        description: "Dreamy melodies with a touch of mystery."
    },
    {
        cover: "5.png",
        title: "Mac DeMarco",
        description: "Chill, lo-fi indie rock for wandering minds."
    }
];


function loadRandomAlbum() {
    
    const randomIndex = Math.floor(Math.random() * albums.length);
    const album = albums[randomIndex];

    
    albumContainer.innerHTML = `
        <img src="${album.cover}" alt="${album.title}">
        <div class="overlay">
            <h2>${album.title}</h2>
            <p>${album.description}</p>
        </div>
    `;
}


shuffleBtn.addEventListener('click', loadRandomAlbum);


loadRandomAlbum();
