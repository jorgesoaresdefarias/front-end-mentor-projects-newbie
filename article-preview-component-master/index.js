var element = document.getElementById('share__wrapper');
element.addEventListener('mouseover', () => {
    document.querySelector('.share_message').style.display = 'flex';
});

element.addEventListener('mouseleave', () => {
    document.querySelector('.share_message').style.display = 'none';
})