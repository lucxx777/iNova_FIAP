function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);

    if (elements.length > instance) {
        
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {

    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

document.addEventListener("DOMContentLoaded", function() {
    const linkElement = document.querySelector('[data-toggle="contact"]');
    const contactForm = document.getElementById("contact-form");

    linkElement.addEventListener("click", function(event) {
        event.preventDefault();
        contactForm.style.display = "block";
    });
});

document.getElementById('acceptCookies').addEventListener('click', function() {
    document.cookie = 'cookieAlertAccepted=true; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/';
    document.querySelector('.cookie-alert').style.display = 'none';
});