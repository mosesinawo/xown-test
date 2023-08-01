const bar = document.getElementById('bar')
const sidebar = document.getElementById('sidebar')
const body = document.getElementById('body')

bar.addEventListener('click', () =>{
    if (bar.classList.contains('fa-times') && body.classList.contains('body')) {
        bar.classList.remove('fa-times')
        bar.classList.add('fa-bars')
        body.classList.remove('body')
        body.classList.add('body-2')
        sidebar.style.display = 'none'

    } else if(bar.classList.contains('fa-bars') && body.classList.contains('body-2')){
        bar.classList.remove('fa-bars')
        bar.classList.add('fa-times')
        body.classList.remove('body-2')
        body.classList.add('body')
        sidebar.style.display = 'flex'
    }
})