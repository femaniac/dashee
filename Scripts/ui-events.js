var navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click' , event => {
        document.querySelectorAll('.nav-item').forEach(e => {
            e.classList.remove('active_selected_content')
        })
        item.classList.add('active_selected_content')
    })
})

//* adding active-class to selected element

document.querySelectorAll('.title_btn').forEach(item => {
    item.addEventListener('click', () => {
     
      document.querySelectorAll('.title_btn').forEach(e => {
        e.classList.remove('active_title')
      })
      item.classList.add('active_title')
  
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


