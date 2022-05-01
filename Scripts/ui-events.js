var navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click' , event => {
        document.querySelectorAll('.nav-item').forEach(e => {
            e.classList.remove('active_selected_content')
        })
        item.classList.add('active_selected_content')
    })
})
