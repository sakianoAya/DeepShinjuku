document.addEventListener("DOMContentLoaded", function () {
    const contentGroups = document.querySelectorAll(".content-group");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.classList.add("slide-in");
            }
            
        });
    }, {
        threshold: 0.1
    });

    contentGroups.forEach(group => observer.observe(group));
});