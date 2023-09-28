// lazy loading for faster page load
document.addEventListener('DOMContentLoaded', function() {
    const landing = document.querySelector('.landing');
    landing.style.backgroundImage = `url('${landing.dataset.bg}')`;
});
