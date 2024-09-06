// LIGHT / DARK MODE

var darkMode = true;

if (loadDarkMode() == false) { setLightMode() };

function toggleLightMode() {
    if (darkMode == true) {
        setLightMode();
    }
    else if (darkMode == false) {
        setDarkMode();
    }
    saveDarkMode(darkMode);
}

function setLightMode() {
    document.documentElement.style.setProperty('--primary-color', 'var(--light-primary)');
    document.documentElement.style.setProperty('--secondary-color', 'var(--light-secondary)');
    document.documentElement.style.setProperty('--tertiary-color', 'var(--light-tertiary)');
    document.documentElement.style.setProperty('--text-color', 'var(--light-text)');
    document.documentElement.style.setProperty('--card-highlight', 'var(--light-card-highlight)');
    document.getElementsByClassName("light-mode-button")[0].className = "fa fa-moon-o fa-lg light-mode-button header-icon";
    darkMode = false;
}

function setDarkMode() {
    document.documentElement.style.setProperty('--primary-color', 'var(--dark-primary)');
    document.documentElement.style.setProperty('--secondary-color', 'var(--dark-secondary)');
    document.documentElement.style.setProperty('--tertiary-color', 'var(--dark-tertiary)');
    document.documentElement.style.setProperty('--text-color', 'var(--dark-text)');
    document.documentElement.style.setProperty('--card-highlight', 'var(--dark-card-highlight)');
    document.getElementsByClassName("light-mode-button")[0].className = "fa fa-sun fa-lg light-mode-button header-icon";
    darkMode = true;
}

function saveDarkMode(isDarkMode) {
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

function loadDarkMode() {
    const darkModeSetting = localStorage.getItem('darkMode');
    return darkModeSetting ? (darkModeSetting === 'enabled') : null;
}

// attach to SUN BUTTON
document.getElementsByClassName("light-mode-button")[0].onclick = function () { toggleLightMode() };