document.addEventListener("DOMContentLoaded", function() {
  const topNav = document.querySelector('.top-nav');
  const mainNav = document.querySelector('.navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
          // Scrolling down
          topNav.style.transform = 'translateY(-100%)'; // Hide the top navbar
          mainNav.style.transform = 'translateY(0)'; // Show the main navbar
      } else {
          // Scrolling up
          topNav.style.transform = 'translateY(0)'; // Show the top navbar
          mainNav.style.transform = 'translateY(0)'; // Keep the main navbar visible
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
});







document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
      const target = parseInt(counter.innerText.replace(/,/g, ''), 10); // Get the target value from the text
      let count = 0; // Start from 0

      const updateCount = () => {
          // Calculate increment
          const increment = Math.ceil(target / 50); // Adjust the speed of the counter

          // If count is less than target, keep updating
          if (count < target) {
              count += increment; // Increment the count
              if (count > target) count = target; // Ensure it doesn't exceed the target
              counter.innerText = count.toLocaleString(); // Update the displayed count with commas
              requestAnimationFrame(updateCount); // Call the function again
          } else {
              counter.innerText = target.toLocaleString(); // Ensure it ends at the target
          }
      };

      updateCount();
  });
});