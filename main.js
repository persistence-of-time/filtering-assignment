// silence
const select = document.querySelector(".filter");

select.addEventListener("change", function (e) {
    const chosen_info = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_info}`);
    
    currently_visible.forEach(function (info) {
        info.classList.remove("active");
    });

    make_visible.forEach(function (info) {
        info.classList.add("active");
    });
    
});