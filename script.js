document.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    navbar.style.backdropFilter = 'blur(10px)';
    navbar.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
  } else {
    navbar.style.backdropFilter = 'none';
    navbar.style.backgroundColor = 'transparent';
  }
});
