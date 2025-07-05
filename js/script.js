const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");

let btnOn = true;

menuBtn.addEventListener("click", () => {
  if (btnOn) {
    btnOn = false;
    menuBtn.classList.add("open");
    menu.classList.replace("hidden", "flex");
  } else {
    btnOn = true;
    menuBtn.classList.remove("open");
    menu.classList.replace("flex", "hidden");
  }
});

// Another method
// menuBtn.addEventListener("click",()=>{
//     menuBtn.classList.toggle("open")
//     menu.classList.toggle("flex")
//     menu.classList.toggle("hidden")
// })
