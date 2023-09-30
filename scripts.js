
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
  });

