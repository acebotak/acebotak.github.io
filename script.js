// Atur variabel menu
var menu = document.querySelector('nav ul');

// Atur event listener untuk toggle menu ketika ikon menu di klik
document.querySelector('.toggle').addEventListener('click', function(e) {
  e.preventDefault();
  menu.classList.toggle('visible');
});

// Atur event listener untuk menutup menu ketika tautan di dalam menu diklik
menu.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    menu.classList.remove('visible');
  }
});

// Atur variabel header
var header = document.querySelector('header');

// Atur event listener untuk mengubah tampilan header ketika pengguna scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > header.clientHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Atur event listener untuk smooth scroll ketika tautan di dalam menu diklik
document.querySelectorAll('nav a').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    var destination = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      top: destination.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Atur event listener untuk mengubah tampilan tombol ketika diklik
document.querySelectorAll('button').forEach(function(button) {
  button.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});
