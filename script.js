const player = document.querySelector('.player');
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    const touchEndX = event.touches[0].clientX;
    const touchEndY = event.touches[0].clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    player.style.left = '${parseFloat(player.style.left) + deltaX}px';
    player.style.top = '${parseFloat(player.style.top) + deltaY}px';

    touchStartX = touchEndX;
    touchStartY = touchEndY;
}

