registerPaint('foo', class{

    static get inputProperties(){
        return ['--count']
    }

    paint(ctx, size, props){
        const {width, height} = size
        const count = props.get('--count')

        for (let i = 0; i < count; i++) {
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
    }
})




// UTILITIES FUNCTIONS
//// return a random number
function random(min, max) {
    return min + Math.random() * (max - min)
}

//// return a random color
function randomColor() {
    return `hsla(${random(0.618, 359.618)} 100% 50% / 0.618)`
}
