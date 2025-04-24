const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });
  
  document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
    observer.observe(el);
  });