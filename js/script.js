document.addEventListener("DOMContentLoaded", function () {
    // 選取所有 content-group 區塊
    const contentGroups = document.querySelectorAll(".content-group");

    // 建立 Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 元素進入視窗，觸發滑入動畫
                entry.target.classList.add("slide-in");
            } else {
                // 元素離開視窗，恢復初始狀態
                entry.target.classList.remove("slide-in");
            }
        });
    }, {
        threshold: 0.1 // 當區塊進入或離開視窗 10% 時觸發
    });

    // 對每個 content-group 設置觀察
    contentGroups.forEach(group => observer.observe(group));
});
