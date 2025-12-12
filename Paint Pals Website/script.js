// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  mainNav.classList.toggle('active');
  
  // Update aria-expanded
  const isExpanded = hamburger.classList.contains('active');
  hamburger.setAttribute('aria-expanded', isExpanded);
});

// Mobile Dropdown Toggle
const dropdowns = document.querySelectorAll('.dropdown > a');

dropdowns.forEach(function(dropdown) {
  dropdown.addEventListener('click', function(e) {
    // Only prevent default on mobile
    if (window.innerWidth <= 992) {
      e.preventDefault();
      const parent = this.parentElement;
      
      // Close other dropdowns
      document.querySelectorAll('.dropdown').forEach(function(item) {
        if (item !== parent) {
          item.classList.remove('active');
        }
      });
      
      // Toggle current dropdown
      parent.classList.toggle('active');
    }
  });
});

// Close mobile nav when clicking outside
document.addEventListener('click', function(e) {
  if (window.innerWidth <= 992) {
    if (!e.target.closest('.main-nav') && !e.target.closest('.hamburger')) {
      hamburger.classList.remove('active');
      mainNav.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }
});

// Reset mobile nav state on window resize
window.addEventListener('resize', function() {
  if (window.innerWidth > 992) {
    hamburger.classList.remove('active');
    mainNav.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.dropdown').forEach(function(item) {
      item.classList.remove('active');
    });
  }
});