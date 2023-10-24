let cat = document.getElementById('cat')

document.addEventListener('mousemove', (event) => {
    x = event.clientX
    y = event.clientY
    cat.style.margin = (y-40) + 'px' + ' 0 0 ' + (x-20) +'px'
})