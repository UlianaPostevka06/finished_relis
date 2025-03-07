function animateNumbers(element, max, duration) {
    let start = 0;
    const increment = max / (duration /10);
    const interval = setInterval(() => {
        start += increment;
        if (start >= max) {
            element.textContent = `${Math.ceil(max)} +`;
            clearInterval(interval);
        }else {
            element.textContent = `${Math.ceil(start)} +`;
        }
    }, 10);
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function handleScroll() {
    const factSection = document.querySelector('.fact__section');
    const statNumbers = document.querySelectorAll('.stat__number');

    if (isElementInViewport(factSection)) {
        statNumbers.forEach((numberElement) => {
            const max = parseInt(numberElement.getAttribute('data-max'), 10);
            animateNumbers(numberElement, max, 2000);
        });
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);