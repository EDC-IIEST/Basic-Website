document.addEventListener('DOMContentLoaded', function () {
    const counterElement = document.getElementById('social-reach-counter');
    let hasStarted = false; 

    const startCounter = () => {
        let currentNumber = 0;
        const targetNumber = 10000;
        const duration = 1000;
        const intervalTime = 5; 

        const step = Math.ceil((targetNumber / duration) * intervalTime);

        const incrementCounter = () => {
            if (currentNumber < targetNumber) {
                currentNumber += step;
                counterElement.textContent = currentNumber.toLocaleString();
                setTimeout(incrementCounter, intervalTime);
            } else {
                counterElement.textContent = targetNumber.toLocaleString() + '+';
            }
        };

        incrementCounter();
    };

    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasStarted) {
                startCounter();
                hasStarted = true;
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(counterElement);
});


document.addEventListener('DOMContentLoaded', function () {
    const counterElement = document.getElementById('startup-reach-counter');
    let hasStarted = false; 

    const startCounter = () => {
        let currentNumber = 0;
        const targetNumber = 10;
        const duration = 1000;
        const intervalTime = 20; 

        const step = Math.ceil((targetNumber / duration) * intervalTime);

        const incrementCounter = () => {
            if (currentNumber < targetNumber) {
                currentNumber += step;
                counterElement.textContent = currentNumber.toLocaleString();
                setTimeout(incrementCounter, intervalTime);
            } else {
                counterElement.textContent = targetNumber.toLocaleString() + '+';
            }
        };

        incrementCounter();
    };

    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasStarted) {
                startCounter();
                hasStarted = true;
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(counterElement);
});