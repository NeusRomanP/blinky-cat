const eyes = document.querySelectorAll('.blink-interval');
const intervalBlink = 5000;
const blinkDuration = 1000;
Array.from(eyes).forEach(eye => {
  setInterval(() => {
    eye.classList.add('blink');
    setTimeout(() => {
      eye.classList.remove('blink');
    }, blinkDuration);
  }, intervalBlink);
});