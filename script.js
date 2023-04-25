const sonic = document.querySelector('.sonic');
const eggman = document.querySelector('.eggman');
const background = document.querySelector('.background');

const jump = () => {
    sonic.classList.add('jump');
    sonic.src = './files/sonic-jump.gif';
    setTimeout(() => {
        sonic.classList.remove('jump');
        sonic.src = './files/sonic.gif';
    }, 900);
}

document.addEventListener('click', jump);

const loop = setInterval(() => {
    const eggmanPosition = eggman.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
    if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 220) {
        eggman.style.animation = 'none';
        eggman.style.left = `${eggmanPosition}px`;
        sonic.src = './files/sonic-loss.gif';
        sonic.style.animation = 'none';
        sonic.style.width = '240px';
        background.src = '/files/gameover.png';
    }
}, 10);