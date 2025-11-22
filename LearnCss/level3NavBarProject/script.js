const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');

hamburger.onclick = () => {
    nav.classList.toggle('open');
};
