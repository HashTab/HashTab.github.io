const hide = document.querySelector('.hide'),
      info = document.querySelector('.info');
hide.addEventListener('click', () => {
    info.classList.add('deactive');
});
