if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.add('light-theme');
} else {
    document.body.classList.add('dark-theme');
};

window.addEventListener('resize', function() {
    shortenText();
  });

  function shortenText() {
    var screenWidth = window.innerWidth;
    var textElement = document.getElementById('header');

    if (screenWidth <= 375) {
      textElement.textContent = "ACME";
    } else {
      textElement.textContent = "ACME Inc.";
    }
  }
  shortenText();