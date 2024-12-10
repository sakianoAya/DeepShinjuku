document.addEventListener("DOMContentLoaded", function () {
    const contentGroups = document.querySelectorAll(".content-group");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 元素進入視窗，觸發滑入動畫
                entry.target.classList.add("slide-in");
            }
            // 移除了 else 區塊，這樣元素離開視窗時就不會移除 slide-in class
        });
    }, {
        threshold: 0.1
    });

    contentGroups.forEach(group => observer.observe(group));
});