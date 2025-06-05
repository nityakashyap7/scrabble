class Button {
    constructor(x, y, text, text2, size) {
        this.x = x
        this.y = y
        this.text = text
        this.text2 = text2
        this.hover = false
        this.size = size
    }

    hovering(x, y) {
        if (this.clicked(x, y))
            this.hover = true
        else
            this.hover = false
    }

    clicked(x, y) {
        const half = this.size/2
        if (x < this.x-half || x > this.x+half || y < this.y-half || y > this.y+half)
            return false
        return true
    }

    draw(c) {
        c.beginPath()
        if (this.hover)
            c.fillStyle = "gray"
        else
            c.fillStyle = "darkgray"
        c.fillRect(this.x-this.size/2, this.y-this.size/2, this.size, this.size)
        c.strokeRect(this.x-this.size/2, this.y-this.size/2, this.size, this.size)
        c.font = this.size/3 + "px Arial"
        c.fillStyle = "black"
        c.textAlign = "center"
        if (this.text2) {
            c.textBaseline = "bottom"
            c.fillText(this.text, this.x, this.y)
            c.textBaseline = "top"
            c.fillText(this.text2, this.x, this.y)
        } else {
            c.textBaseline = "middle"
            c.fillText(this.text, this.x, this.y)
        }
    }
}

export default Button