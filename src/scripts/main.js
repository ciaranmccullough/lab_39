document.addEventListener('DOMContentLoaded', function () {
  // const { log, table, dir } = console;

  // Responsive Navbar
  const mainNav = document.getElementById('js-nav');
  const navBarToggle = document.getElementById('js-navbar-toggle');
  const hamburger = document.querySelector('.hamburger');

  navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    hamburger.classList.toggle('is-active');
  });

  // Smooth Scrolling
  const links = document.querySelectorAll('.nav-links');
  // log(links);

  for (const link of links) {
    link.addEventListener('click', clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  }

  // Lazy Load images
  let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
  // log(lazyImages);
  if ('IntersectionObserver' in window) {
    // Create new observer object
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});
