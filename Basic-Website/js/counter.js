const counterElement = document.getElementById('counter');
const targetNumber = 30000;
const speed = 100; // Adjust for faster/slower counting

// Function to start the counter from 0 to the target
function startCounter() {
  let currentNumber = 0;

  function updateCounter() {
    const increment = Math.ceil(targetNumber / speed);

    if (currentNumber < targetNumber) {
      currentNumber += increment;
      if (currentNumber > targetNumber) currentNumber = targetNumber;
      counterElement.innerText = currentNumber.toLocaleString()+'+';
      requestAnimationFrame(updateCounter);
    }
  }

  updateCounter();
}

// Reset counter and restart it when the section becomes visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      counterElement.innerText = '0'; // Reset counter display
      startCounter(); // Restart counter
    }
  });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.countDiv'));
