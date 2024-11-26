// Select all entries and the stylus
const entries = document.querySelectorAll('.entry');
const stylus = document.getElementById('stylus');

// Adjust stylus rotation based on hover
entries.forEach((entry, index) => {
    entry.addEventListener('mouseover', () => {
        const angle = index * 36 - 45; // Adjust stylus angle
        stylus.style.transform = `rotate(${angle}deg)`;
    });
});

// Reset stylus when mouse leaves
document.querySelector('.vinyl-record').addEventListener('mouseleave', () => {
    stylus.style.transform = 'rotate(-45deg)';
});
