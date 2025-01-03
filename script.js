const mobile_device = document.querySelector('.mobile_device');
const main_menu = document.querySelector('.main_menu');

// Toggle the menu when clicking on the mobile device toggle
mobile_device.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the window
    main_menu.classList.toggle('open');
});

// Close the menu on scroll
window.addEventListener('scroll', () => {
    main_menu.classList.remove('open');
});

// Close the menu when clicking outside
window.addEventListener('click', function(event) {
    // Ensure the click is not inside the menu or on the toggle button
    if (!main_menu.contains(event.target) && event.target !== mobile_device) {
        main_menu.classList.remove('open');
    }
});
