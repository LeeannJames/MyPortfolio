const row = document.querySelector('.header .nav-bar .nav-list .row');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

row.addEventListener('click',(Function)=>{
    row.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',(Function)=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 570){
        header.style.backgroundColor = 'yellowgreen';
    }else{
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item)=>{
    item.addEventListener('click', () =>{
        row.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});