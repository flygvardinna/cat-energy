var pageHeader = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__nav-toggle');
var catPicture = document.querySelector('.before-after__cat-picture');
var catFatButton = document.querySelector('.before-after__button--before');
var catSlimButton = document.querySelector('.before-after__button--after');
var catToggle = document.querySelector('.before-after__toggle');

var showSlimCat = function () {
  catPicture.classList.remove('before-after__cat-fat');
  catPicture.classList.add('before-after__cat-slim');
};

var showFatCat = function () {
  catPicture.classList.remove('before-after__cat-slim');
  catPicture.classList.add('before-after__cat-fat');
};

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

if (catPicture) {
  catFatButton.addEventListener('click', function() {
    if (catPicture.classList.contains('before-after__cat-slim')) {
      showFatCat();
    }
  });
  catSlimButton.addEventListener('click', function() {
    if (catPicture.classList.contains('before-after__cat-fat')) {
      showSlimCat();
    }
  });
  catToggle.addEventListener('click', function() {
    if (catPicture.classList.contains('before-after__cat-fat')) {
      showSlimCat();
    } else {
      showFatCat();
    }
  });
};
