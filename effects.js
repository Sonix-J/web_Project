const firstView = document.querySelector('.first-view');
    const lineBox = document.querySelector('.line-box');
    const exploreSection = document.querySelector('.explore');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add fade-out class when first-view is in view
                lineBox.classList.remove('scrolled');
                exploreSection.classList.remove('scrolled');
            } else {
                // Keep elements visible when first-view is not in view
                lineBox.classList.add('scrolled');
                exploreSection.classList.add('scrolled');
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    observer.observe(firstView);