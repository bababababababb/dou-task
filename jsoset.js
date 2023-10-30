let text = document.getElementById('text')
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

img = new Image()
img.crossOrigin = "Anonymous"
img.src = 'lokii.jpg'
img.onload = function() {
    ctx.drawImage(img, 0, 0, 500, 380)
}

document.addEventListener('mousedown', (event) => {
    let x = event.pageX - canvas.offsetLeft
    let y = event.pageY - canvas.offsetTop
    let data = ctx.getImageData(x, y, 1, 1).data

    text.style.color = rgb2hex(data.slice(0, 3))
})

function rgb2hex(rgb) {
    r = rgb[0].toString(16)
    g = rgb[1].toString(16)
    b = rgb[2].toString(16)

    if (r.length == 1) {
        r = '0' + r
    }
    if (g.length == 1) {
        g = '0' + g
    }
    if (b.length == 1) {
        b = '0' + b
    }

    return '#' + r.toString(16) + g.toString(16) + b.toString(16)
}
