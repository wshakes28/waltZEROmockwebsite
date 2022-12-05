let dropDown = document.querySelector(".dropbtn")
let dropDownContent = document.querySelector(".dropdown-content")

dropDown.addEventListener('click', e => {
    let dropDownContent = document.querySelector('.dropdown-content')

    dropDownContent.classList.toggle("show")
})

dropDownContent.addEventListener('mouseleave', e => {
    
    dropDownContent.classList.toggle("show")
})

console.log(dropDownContent)