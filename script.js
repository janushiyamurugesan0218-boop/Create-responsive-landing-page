// Get the toggle button element
const themeToggleBtn = document.getElementById('theme-toggle');

// Check for saved user preference in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// Add click event listener to the button
themeToggleBtn.addEventListener('click', () => {
    // Get the current theme status
    let theme = document.documentElement.getAttribute('data-theme');
    
    // Switch the theme and save it to localStorage
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});