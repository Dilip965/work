document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const toggleButton = header.querySelector('.accordion-toggle');
  
      // Collapse other open items
      document.querySelectorAll('.accordion-item').forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-toggle').textContent = '+'; // Set others to '+'
        }
      });
  
      // Toggle current item
      const isActive = item.classList.toggle('active');
      toggleButton.textContent = isActive ? '-' : '+'; // Set '-' when active, '+' otherwise
    });
  });
  