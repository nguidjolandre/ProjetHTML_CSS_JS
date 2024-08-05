document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for interactive features here

    // Example: Animate cards on hover
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('hover');
        });
        card.addEventListener('mouseout', () => {
            card.classList.remove('hover');
        });
    });

    // Example: Display a message after clicking "En savoir plus"
    const links = document.querySelectorAll('.card .content a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Vous allez être redirigé vers une nouvelle page.');
            window.location.href = link.href;
        });
    });

    // Responsive behavior
    function checkScreenSize() {
        if (window.innerWidth < 768) {
            document.body.classList.add('small-screen');
        } else {
            document.body.classList.remove('small-screen');
        }
    }
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});
