// Simple mobile menu toggle
const btn = document.getElementById('mobileNavToggle');
const menu = document.getElementById('mobileNav');

function setOpen(open) {
    menu.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('overflow-hidden', open);
}

btn?.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
});

// Close after clicking a link
menu?.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', () => setOpen(false));
});

 // Close when clicking outside
document.addEventListener('click', (e) => {
    if (!menu || menu.classList.contains('hidden')) return;

    if (
        !menu.contains(e.target) &&
        !btn.contains(e.target)
    ) {
        setOpen(false);
    }
});

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
});