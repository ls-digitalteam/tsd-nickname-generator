const generateBtn = document.getElementById('generateBtn');
const words = document.querySelectorAll('.word');

// Pick a random starting nickname
let currentIndex = Math.floor(Math.random() * words.length);

// Show random word on page load
words[currentIndex].classList.add('animate');

generateBtn.addEventListener('click', () => {
    const previousIndex = currentIndex;
    
    // Pick a random index that's different from current
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * words.length);
    } while (newIndex === currentIndex && words.length > 1);
    
    currentIndex = newIndex;
    
    // Fade out previous word
    words[previousIndex].classList.remove('animate');
    words[previousIndex].classList.add('fade-out');
    
    // Fade in new word
    words[currentIndex].classList.remove('fade-out');
    words[currentIndex].classList.add('animate');
});
