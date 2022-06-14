const button = document.querySelector('button');
const popup = document.querySelector('.wrapper');
const Close = document.querySelector('.popup-close')

button.addEventListener('click', ()=>{
    popup.style.display = 'block';
});

Close.addEventListener('click', ()=>{
    popup.style.display = 'none';
});

popup.addEventListener('click', ()=>{
    popup.style.display = 'none';
});

