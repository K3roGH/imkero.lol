document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('hovered');
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove('hovered');
    });
});
