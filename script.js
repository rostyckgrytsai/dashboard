const menu_icon = document.getElementsByClassName('burger_icon')[0]
const side_menu = document.getElementsByClassName('side_menu')[0]

let is_open = false


console.log(side_menu.classList)

menu_icon.addEventListener('click', ()=>{
    side_menu.classList.toggle('open')
})