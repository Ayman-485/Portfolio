document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    lucide.createIcons();

    // 1. Navigation Logic (Makes buttons work)
    window.scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Subtracting navbar height
                behavior: 'smooth'
            });
        }
    };

    // 2. Form Submission logic
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message Sent! (Note: This requires a backend to actually send email)');
        form.reset();
    });
});