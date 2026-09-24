document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('is-open');
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
            menuButton.innerHTML = `<i class="fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}"></i>`;
        });

        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.setAttribute('aria-label', 'Open menu');
                menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    const inquiryForm = document.querySelector('form[onsubmit="sendToWhatsApp(event)"]');
    if (inquiryForm) inquiryForm.removeAttribute('onsubmit');
});

function sendToWhatsApp(event) {
    event.preventDefault();

    const name = document.querySelector('#clientName').value.trim();
    const area = document.querySelector('#clientArea').value;
    const service = document.querySelector('#clientService').value;
    const message = document.querySelector('#clientMsg').value.trim() || 'Details phone par discuss karna hai.';
    const text = `Namaste, mera naam ${name} hai.\nLocation: ${area}\nService: ${service}\nProblem: ${message}`;

    window.open(`https://wa.me/919724303415?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
}