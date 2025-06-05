class Button {
    constructor(x, y, l, w, text, text2) {
        this.x = x
        this.y = y
        this.l = l
        this.w = w
        this.text = text
        this.text2 = text2
        this.hover = false
    }

    hovering(x, y) {
        if (this.clicked(x, y))
            this.hover = true
        else
            this.hover = false
    }

    clicked(x, y) {
        if (x < this.x-this.l/2 || x > this.x+this.l/2 || y < this.y-this.w/2 || y > this.y+this.w/2)
            return false
        return true
    }

    draw(c) {
        c.beginPath()
        if (this.hover)
            c.fillStyle = "gray"
        else
            c.fillStyle = "darkgray"
        c.fillRect(this.x-this.l/2, this.y-this.w/2, this.l, this.w)
        c.strokeRect(this.x-this.l/2, this.y-this.w/2, this.l, this.w)
        c.font = this.w/3 + "px Arial"
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