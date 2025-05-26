document.addEventListener('DOMContentLoaded', () => {
    const originalCardContainer = document.querySelector('.container');
    const presentationBox = document.createElement('div');
    presentationBox.classList.add('presentation-box');

    const animatedCard = originalCardContainer.cloneNode(true);
    originalCardContainer.remove();

    animatedCard.style.opacity = '0';
    animatedCard.style.transform = 'translateY(0) scale(0.1)';
    animatedCard.style.transition = 'none';

    presentationBox.appendChild(animatedCard);
    document.body.prepend(presentationBox);

    void animatedCard.offsetWidth;

    setTimeout(() => {
        presentationBox.classList.add('animate-ribbon-x');
    }, 1000);

    setTimeout(() => {
        presentationBox.classList.add('animate-ribbon-y');
    }, 2000);

    setTimeout(() => {
        presentationBox.classList.add('reveal-box');
    }, 3000);

    setTimeout(() => {
        animatedCard.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        animatedCard.style.opacity = '1';
        animatedCard.style.transform = 'translateY(0) scale(1)';

        presentationBox.addEventListener('transitionend', function handler() {
            if (presentationBox.classList.contains('reveal-box')) {
                presentationBox.remove();
                document.body.style.overflowY = 'auto';
                presentationBox.removeEventListener('transitionend', handler);
            }
        });

    }, 3800);
});