const btn = document.querySelector(".btn-menu-burger")
const icons = document.querySelectorAll(".btn-menu")
const menu = document.querySelector(".menu")

btn.addEventListener("click", () => {
    btn.classList.toggle("active")

    if(btn.classList.contains("active")){
       icons[0].classList.remove("active")
       icons[1].classList.add("active")
       menu.classList.add("active")
    } else{
        icons[1].classList.remove("active")
        icons[0].classList.add("active")
        menu.classList.remove("active")
    }
})