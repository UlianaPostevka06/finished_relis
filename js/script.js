document.querySelectorAll('.level-toggle').forEach((toggleButton) => {
    toggleButton.addEventListener('click', () => {
        const descriptionBlosk = toggleButton.closest('.level').querySelector('.level__description-block');

        if (descriptionBlosk.style.display === 'none' || !descriptionBlosk.style.display) {
            descriptionBlosk.style.display = 'block';
        } else {
            descriptionBlosk.style.display = 'none';
        }

        const icon = toggleButton.querySelector('i');
        if (icon.style.transform === 'rotate(180deg)') {
            icon.style.transform = 'rotate(0deg)';
        } else {
            icon.style.transform = 'rotate(180deg)';
        }
    });
});