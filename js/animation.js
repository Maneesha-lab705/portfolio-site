const toggleBtn = document.querySelector('.theme-toggle');

function updateThemeIcon() {
    toggleBtn.innerHTML = ''; // Clear previous content

    const icon = document.createElement('img');
    icon.src = document.body.classList.contains('dark') ? './image/sun.png' : './image/moon.png';
    icon.alt = 'Theme Icon';
    icon.style.width = '24px';
    icon.style.height = '24px';


    toggleBtn.appendChild(icon);
}

// Example toggle function
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    updateThemeIcon();
});

// Initialize icon on page load
updateThemeIcon();

