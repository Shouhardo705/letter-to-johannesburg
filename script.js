const sealClick = document.getElementById('sealClick');
const letter = document.getElementById('letter');

sealClick.addEventListener('click', function() {
    letter.classList.remove('hidden');
    letter.classList.add('unfurled');
    
    // Hide the clickable seal after click
    sealClick.style.display = 'none';
});