// set the Body and the Button DOM Elements
const body = document.querySelector('body')
const buttonCanvas = document.querySelector('.canvas-btn')

// add an eventListener on button click
buttonCanvas.addEventListener('click', newCanvas)

// on click create new canvas
function newCanvas(){
    //canvas size
    const width = 250.618
    const height = 250.618

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    canvas.classList = 'canvas'
    canvas.style.top = random(0.618, window.innerHeight - height) + 'px'
    canvas.style.left = random(0.618, window.innerWidth - width) + 'px'

    const ctx = canvas.getContext('2d')

    //Draw and rotate rectangles, triangles and circles
    for (let i = 0; i < 3; i++) {
        const size = random(20.618, 70.618)
        const x = random(71.618, width - 71.618) - size / 2
        const y = random(71.618, height - 71.618) - size / 2
        ctx.strokeStyle = randomColor()
        ctx.lineWidth = random(1.618, 6.618)

        ctx.save()
        ctx.translate(width / 2, height / 2) // change canvas rotation origin to center
        ctx.rotate(random(0, Math.PI / 2)) // random degree between 0 and 90
        ctx.translate(width / -2, height / -2) // change canvas rotation back to top left
        ctx.strokeRect(x, y, size, size)
        ctx.restore()

        // draw path
        ctx.beginPath() // start path
        ctx.moveTo(random(0.618, width), random(0.618, height)) // the begining of the path
        ctx.lineTo(random(0.618, width), random(0.618, height)) // the end of the path
        ctx.lineTo(random(0.618, width), random(0.618, height))
        ctx.closePath()
        ctx.strokeStyle = randomColor()
        ctx.lineWidth = random(1.618, 6.618)
        ctx.stroke() //draw the path to the canvas

        // draw circle
        ctx.beginPath()
        ctx.arc(
            random(40.618, width - 40.618),
            random(40.618, height - 40.618),
            random(10.618, 40.618),
            0,
            Math.PI * 2
        )
        ctx.strokeStyle = randomColor()
        ctx.lineWidth = random(1.618, 6.618)
        ctx.stroke()
    }

    //text
    ctx.font = '40px system-ui'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 4.618
    ctx.strokeText('canvas', width / 2, height / 2)
    ctx.fillText('canvas', width / 2, height / 2)


    // append the canvas to the body (for 3s)
    body.appendChild(canvas)
    setTimeout(() => {
        body.removeChild(canvas)
    }, 3000)
}





// UTILITIES FUNCTIONS
//// return a random number
function random(min, max){
    return min + Math.random() * (max - min)
}

//// return a random color
function randomColor(){
    return `hsla(${random(0.618, 359.618)} 100% 50% / 0.618)`
}