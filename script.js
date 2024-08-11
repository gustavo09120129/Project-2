document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta');
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transform = 'scale(1.1)';
    });

    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.transform = 'scale(1)';
    });

    ctaButton.addEventListener('click', () => {
        alert('Welcome to the future of web design!');
    });
});
