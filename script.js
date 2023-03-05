const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];

const showNavItems = function (dir1, dir2) {
  navItems.forEach((item, i) =>
    item.classList.replace(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`)
  );
};

const showNavbar = function () {
  menuBars.classList.toggle('change');

  overlay.classList.toggle('overlay-active');

  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    showNavItems('out', 'in');
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    showNavItems('in', 'out');
  }
};

menuBars.addEventListener('click', showNavbar);

navItems.forEach(nav => nav.addEventListener('click', showNavbar));
