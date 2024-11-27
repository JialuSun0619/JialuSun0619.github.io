const entries = document.querySelectorAll('.entry');
const stylus = document.getElementById('stylus');

entries.forEach((entry, index) => {
    entry.addEventListener('mouseover', () => {
        const angle = index * 36 - 45; 
        stylus.style.transform = `rotate(${angle}deg)`;
    });
});


document.querySelector('.vinyl-record').addEventListener('mouseleave', () => {
    stylus.style.transform = 'rotate(-45deg)';
});
