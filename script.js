document.addEventListener('DOMContentLoaded', () => {
    const originalCardContainer = document.querySelector('.container');
    const fullPageContainer = document.querySelector('.full-page-container');
    const presentationBox = document.createElement('div');
    presentationBox.classList.add('presentation-box');

    const animatedCloneCard = originalCardContainer.cloneNode(true);
    animatedCloneCard.classList.add('container-animated-clone');
    animatedCloneCard.classList.remove('container');

    originalCardContainer.style.display = 'none';
    fullPageContainer.style.opacity = '0';
    fullPageContainer.style.pointerEvents = 'none';

    presentationBox.appendChild(animatedCloneCard);
    document.body.prepend(presentationBox);

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
        presentationBox.remove();
        document.body.style.overflowY = 'auto';

        originalCardContainer.style.display = 'flex';
        originalCardContainer.style.opacity = '0';
        originalCardContainer.style.transform = 'scale(0.8)';

        void originalCardContainer.offsetWidth;

        originalCardContainer.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        originalCardContainer.style.opacity = '1';
        originalCardContainer.style.transform = 'scale(1)';

        fullPageContainer.classList.add('visible-content');

    }, 4500);
});