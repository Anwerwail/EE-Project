// Function to toggle visibility of content sections
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'block') {
        section.style.display = 'none';
    } else {
        section.style.display = 'block';
    }
}

// Function to switch language
function switchLanguage(language) {
    var elements = document.querySelectorAll('[data-lang-en], [data-lang-fr], [data-lang-ar]');
    
    elements.forEach(function(element) {
        var en = element.getAttribute('data-lang-en');
        var fr = element.getAttribute('data-lang-fr');
        var ar = element.getAttribute('data-lang-ar');
        
        if (language === 'en') {
            element.textContent = en;
        } else if (language === 'fr') {
            element.textContent = fr;
        } else if (language === 'ar') {
            element.textContent = ar;
        }
    });
}

// Initialize the default language as English
document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('en');
});
