var navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click' , event => {
        document.querySelectorAll('.nav-item').forEach(e => {
            e.classList.remove('active_selected_content')
        })
        item.classList.add('active_selected_content')
    })
})


var notification = document.getElementById('notification');
var dropdown = document.getElementById('dropdown_menu')
dropdown.style.display = 'none'

notification.addEventListener('click' , () => {
    if(dropdown.style.display === 'none'){
        dropdown.style.display = 'block'
    }else{
        dropdown.style.display = 'none'
    }
})


