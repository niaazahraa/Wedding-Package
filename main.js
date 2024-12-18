// Control background music
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("background-music");
    music.volume = 0.5; // Adjust volume
});

// Get modal element
const modal = document.getElementById('venueModal');

// Get the card element
const venueCard = document.querySelector('.card:first-child'); // Assuming it's the first card

// Get the close button
const closeBtn = document.querySelector('.close');

// Open modal when clicking the card
venueCard.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
