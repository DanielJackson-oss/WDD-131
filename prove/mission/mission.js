let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#1a1a1a';
        document.querySelector('.card').style.backgroundColor = '#2c2c2c';
        document.querySelector('.card').style.color = '#e0e0e0';
        document.querySelector('.page-title').style.color = '#ffffff';
        logo.src = 'byui-logo-white.webp';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        document.querySelector('.card').style.backgroundColor = '#ffffff';
        document.querySelector('.card').style.color = '#222';
        document.querySelector('.page-title').style.color = '#111';
        logo.src = 'byui-logo-blue.webp';
    }
}           
                