const songs = [
    { title: "吞吐", artist: "八仙饭店", audio: "1.mp3" },
    { title: "Skin", artist: "Yico Tseng", audio: "2.mp3" },
    { title: "Heavenly", artist: "Cigarettes After Sex", audio: "3.mp3" },
    { title: "All I need", artist: "Radiohead", audio: "4.mp3" },
    { title: "Fade Into You", artist: "Mazzy Star", audio: "5.mp3" },
    { title: "Exquisite Tension", artist: "You'll never Get to Heaven", audio: "6.mp3" },
    { title: "泡", artist: "King Gnu", audio: "7.mp3" },
    { title: "Solid Liquid Gas", artist: "Eartheater", audio: "8.mp3" },
    { title: "Let It Happen", artist: "Tame Impala", audio: "9.mp3" },
    { title: "Extent", artist: "Arca", audio: "10.mp3" },
    ];
    
    const shapesLayer = document.getElementById("shapes-layer");
    const songsLayer = document.getElementById("songs-layer");
    
    const rows = 20;
    const cols = 20;
    for (let i = 0; i < rows * cols; i++) {
    const shape = document.createElement("div");
    shape.className = "shape";
    shapesLayer.appendChild(shape);
    }
    songs.forEach((song, index) => {
    const songElement = document.createElement("div");
    songElement.className = "song";
    songElement.textContent = `${song.title} - ${song.artist}`;
    
    const x = Math.random() * 80 + 10; 
    const y = Math.random() * 80 + 10;
    songElement.style.left = `${x}%`;
    songElement.style.top = `${y}%`;
    songElement.addEventListener("mouseover", () => {
    songElement.style.opacity = "1";
    });
    songElement.addEventListener("click", () => {
    const audio = new Audio(song.audio);
    audio.play();
    });
    songsLayer.appendChild(songElement);
    });
    
    document.getElementById('return-home').addEventListener('click', () => {
    console.log('Returning to homepage...');
    });