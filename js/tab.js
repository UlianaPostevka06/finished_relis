const tabs = document.querySelectorAll(".tab");
const blocks = document.querySelectorAll(".block");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

let currentIndex = 0;
function updateActiveTab(index) {
    tabs.forEach(tab => tab.classList.remove("active"));
    blocks.forEach(block => block.classList.remove("active"));
    tabs[index].classList.add("active");
    blocks[index].classList.add("active");
}


tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        currentIndex = index;
        updateActiveTab(currentIndex);
    });
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    updateActiveTab(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % tabs.length;
    updateActiveTab(currentIndex);
});
