function animateNumbers(element, max, duration) {
    let start = 0;
    const increment = max / (duration /10);
    const interval = setInterval(() => {
        start += increment;
        if (start >= max) {
            element.textContent = `${Math.ceil(max)} +`;
        }
        clearInterval(interval);
}