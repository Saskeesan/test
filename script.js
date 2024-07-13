document.addEventListener("DOMContentLoaded", function() {
    const portfolioImages = document.querySelectorAll(".portfolio-image");

    portfolioImages.forEach(img => {
        img.onload = () => {
            if (img.naturalWidth > img.naturalHeight) {
                img.style.objectFit = 'cover';
                img.style.height = '400px'; // Adjust this value as necessary
                img.style.width = '100%';
            }
        };
    });
});
