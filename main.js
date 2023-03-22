
const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.hideText');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('showText');
  })
  if (hideText.classListcontains('showText')) {
    read-more-btn.innerHTML = 'Leer Menos';
    }
  else {
    read-more-btn.innerHTML = 'Leer Mas';
    };
});
