document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.link-row');
    
    rows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(15px)';
        
        setTimeout(() => {
            row.style.transition = 'all 0.4s ease';
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});

