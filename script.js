const generateBtn = document.getElementById('generateBtn');
const words = document.querySelectorAll('.word');
let currentIndex = 0;

// Show first word on page load
words[currentIndex].classList.add('animate');

generateBtn.addEventListener('click', () => {
    const previousIndex = currentIndex;
    
    // Move to next word
    currentIndex = (currentIndex + 1) % words.length;
    
    // Fade out previous word
    words[previousIndex].classList.remove('animate');
    words[previousIndex].classList.add('fade-out');
    
    // Fade in new word
    words[currentIndex].classList.remove('fade-out');
    words[currentIndex].classList.add('animate');
});
