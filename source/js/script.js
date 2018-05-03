var pageHeader = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__nav-toggle');

pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--nav-closed')) {
    pageHeader.classList.remove('page-header--nav-closed');
    pageHeader.classList.add('page-header--nav-opened');
  } else {
    pageHeader.classList.add('page-header--nav-closed');
    pageHeader.classList.remove('page-header--nav-opened');
  }
});
