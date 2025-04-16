function toggleMenu() {
    const menu = document.getElementById('nav-links');
    const content = document.getElementById('content');

    // Toggle de actieve status van het menu (open of sluiten)
    menu.classList.toggle('active');
    
    // Toggle de verschuiving van de content (beweeg naar beneden of terug)
    content.classList.toggle('shifted');
}
