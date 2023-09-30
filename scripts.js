
  document.addEventListener('DOMContentLoaded', function() {
    const partnerLogos = document.querySelector('.partner-logos');
    const partnerItems = partnerLogos.children;

    let currentIndex = 0;
    const totalPartners = partnerItems.length;
    const partnerWidth = partnerItems[0].offsetWidth;

    function showNextPartner() {
      currentIndex = (currentIndex + 1) % totalPartners;
      const offset = -partnerWidth * currentIndex;
      partnerLogos.style.transform = `translateX(${offset}px)`;
    }

    setInterval(showNextPartner, 3000); // Automatically switch partners every 3 seconds


    // transition item
     const elements = document.querySelectorAll('.transition-item');

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkElements() {
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkElements);
    window.addEventListener('resize', checkElements);

    checkElements(); // Initial check


    // hambureger menu
    document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navigation = document.querySelector('.navigation');

  mobileMenuToggle.addEventListener('click', function() {
    navigation.classList.toggle('open');
  });
});

// end of hamburger menu
  });

