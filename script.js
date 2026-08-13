lucide.createIcons();
    
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    let menuOpen = false;
    
    menuBtn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('hidden');
      
      // Toggle icon
      if (menuOpen) {
        menuIcon.setAttribute('data-lucide', 'x');
      } else {
        menuIcon.setAttribute('data-lucide', 'menu');
      }
      lucide.createIcons();
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuOpen = false;
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
      });
    });
    
    // Smooth header background on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-lg', 'shadow-black/20');
      } else {
        header.classList.remove('shadow-lg', 'shadow-black/20');
      }
    });