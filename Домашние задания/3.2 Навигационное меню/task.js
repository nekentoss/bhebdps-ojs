
const links = document.querySelectorAll('.menu__link');

links.forEach(link => {
  link.addEventListener('click', function (event) {
    const parentItem = this.closest('.menu__item');
    const submenu = parentItem.querySelector('.menu_sub');
    if (submenu) {
      event.preventDefault();
      submenu.classList.toggle('menu_active');
    }
  });
});