// Add scroll animation functionality
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    elements.forEach((el) => observer.observe(el));
});
