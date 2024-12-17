const themeIcon = document.getElementById('theme-icon');
const mainDiv = document.getElementById('main');
const header = document.getElementById('header');
const languageCZ = document.getElementById('cz-flag');
const languageEN = document.getElementById('en-flag');

if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "cz");
}

function setLanguage(language) {
    localStorage.setItem("language", language);
    applyLanguage(language);
}
function applyLanguage(language) {
    translatePage(language);
    
    if (language === "cz") {
        console.log("Czech language selected");
        // Add logic to apply Czech language (e.g., change text/content)
    } else if (language === "en") {
        console.log("English language selected");
        // Add logic to apply English language
    }
}
languageCZ.addEventListener('click', () => setLanguage("cz"));
languageEN.addEventListener('click', () => setLanguage("en"));

// Apply the stored language when the page loads
applyLanguage(localStorage.getItem("language"));
// Function to set the theme
function setTheme(theme) {
    const root = document.documentElement;

    if (theme === 'dark') {
        localStorage.setItem("theme", "dark");
        themeIcon.src = 'sun.png';
        document.body.style.backgroundColor = '#0D1B2A';
        document.body.style.color = '#FFFFFF';
        header.style.backgroundColor = '#0D1B2A';
        root.style.setProperty('--overlay-opacity', '0.5');

    } else if (theme === 'light') {
         localStorage.setItem("theme", "light");
        themeIcon.src = 'moon.png';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        header.style.backgroundColor = 'white';
        root.style.setProperty('--overlay-opacity', '0.2');
    }
}

// Initialize the theme on page load
function initializeTheme() {
    const getThemeLocalstorage = localStorage.getItem("theme");

    if (getThemeLocalstorage) {
        setTheme(getThemeLocalstorage); // Set the theme based on localStorage
    } else {
        setTheme('dark'); // Default to dark theme if no theme is found
    }
}

initializeTheme();

// Toggle between themes when the icon is clicked
themeIcon.addEventListener('click', () => {
    document.body.style.transition = "background-color 1s ease-in-out";
    header.style.transition = "background-color 1s ease-in-out";
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === 'dark') {
           setTheme('light');

    } else {
        setTheme('dark');
       }
});

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const overlayContent = document.querySelector('.overlay-content');

    // Adjust opacity dynamically based on scroll position
    const opacity = Math.max(1 - scrollY / 300, 0);
    overlayContent.style.opacity = opacity;
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').slice(1); // Get the target ID
        const targetSection = document.getElementById(targetId); // Find the target section
        
        // Smoothly scroll to the section
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a ');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            const activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {  // Check if the element exists
                activeLink.classList.add('active');
            }
        }
    });
};


console.log(navLinks)