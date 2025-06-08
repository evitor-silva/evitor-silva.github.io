document.addEventListener('DOMContentLoaded', function () {

  const words = ["Java", "Spring Boot", "Full Stack"];
  const typewriterElement = document.querySelector('.typewriter');
  
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const delayBetweenWords = 2000;

  function typeWriter() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Deletando
      typewriterElement.textContent = currentWord.substring(0, letterIndex - 1);
      letterIndex--;
      if (letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setTimeout(typeWriter, deletingSpeed);
      }
    } else {
      // Escrevendo
      typewriterElement.textContent = currentWord.substring(0, letterIndex + 1);
      letterIndex++;
      if (letterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeWriter, delayBetweenWords);
      } else {
        setTimeout(typeWriter, typingSpeed);
      }
    }
  }
  
  typeWriter();
});