const toUpButton = document.getElementById('toUp');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1300){
        toUpButton.classList.add('show');
        toUpButton.classList.remove('hide');
    } else {
        toUpButton.classList.remove('show');
        toUpButton.classList.add('hide');
    }
});

toUpButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

document.querySelectorAll('menu__link').forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection){
            targetSection.scrollIntoView({ behavior: 'smooth'})
        }
    });
});