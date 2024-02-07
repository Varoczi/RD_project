if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.add('light-theme');
} else {
    document.body.classList.add('dark-theme');
};