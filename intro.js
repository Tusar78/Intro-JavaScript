const para = document.getElementById('demo');
para.addEventListener('click', () => {
    let name = prompt('Enter your name: ', '');
    para.textContent = `Player 1: ${name}`;
    console.log(this);
})