var elBtn = document.querySelector(".burger")
var elBurgerBlock = document.querySelector(".burger__block")
var elBurgerClose = document.querySelector(".burger__close")


elBtn.addEventListener("click", function(){
    elBurgerBlock.classList.toggle("burger__none")
    elBurgerClose.classList.toggle("burger__none")
} )