const form = document.querySelector('.wrapper .text form');

form.addEventListener('mouseover', (e) => {
    form.classList.add('error');
});

form.addEventListener('mouseout', (e) => {
    form.classList.remove('error');
});