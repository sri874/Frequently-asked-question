document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Close all other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                    otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            if (isOpen) {
                item.classList.remove('active');
                content.style.maxHeight = null;
                header.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Handle window resize to update active item height if needed
    window.addEventListener('resize', () => {
        const activeItem = document.querySelector('.accordion-item.active');
        if (activeItem) {
            const activeContent = activeItem.querySelector('.accordion-content');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
    });
});
