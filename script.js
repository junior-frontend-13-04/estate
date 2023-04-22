let headerBtns = document.querySelectorAll('.header-btn');
let loginBtn = document.querySelector('.login');
let signinBtn = document.querySelector('.signin');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let login = document.querySelector('.login-form');
let register = document.querySelector('.register-form')


headerBtns.forEach(btn => {
  btn.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX * 3 - rect.left;
    btn.style.setProperty('--x', x + 'deg')
  })
});




loginBtn.addEventListener('click', () => {
  overlay.classList.remove('overlay-active');
  login.style.display = 'block';
});

signinBtn.addEventListener('click', () => {
  overlay.classList.remove('overlay-active');
  register.style.display = 'block';
});


overlay.addEventListener('click', event => {
  if(event.target === overlay) {
    overlay.classList.add('overlay-active');
    login.style.display = 'none';
    register.style.display = 'none';
  }
})