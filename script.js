document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".slide-up");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });
    elements.forEach(el => observer.observe(el));
});
