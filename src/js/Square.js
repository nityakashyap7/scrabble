class Square {
    constructor(x, y, mult, type, size) {
        this.x = x
        this.y = y
        this.mult = mult
        this.type = type
        this.size = size
    }

    wordMult() {
        if (this.type == "letter")
            return 1
        if (this.mult == "double")
            return 2
        else
            return 3
    }

    letterMult() {
        if (this.type == "word")
            return 1
        if (this.mult == "double")
            return 2
        else
            return 3
    }

    draw(c) {
        c.beginPath()
        if (this.mult == "triple") {
            if (this.type == "word")
                c.fillStyle = "orange"
            else
                c.fillStyle = "mediumseagreen"
        } else {
            if (this.type == "word")
                c.fillStyle = "tomato"
            else
                c.fillStyle = "dodgerblue"
        }
        c.fillRect(this.x-this.size/2, this.y-this.size/2, this.size, this.size)
        c.font = this.size/3 + "px Arial"
        c.fillStyle = "black"
        c.textAlign = "center"
        c.textBaseline = "bottom"
        c.fillText(this.mult, this.x, this.y)
        c.textBaseline = "top"
        c.fillText(this.type, this.x, this.y)
    }
}

export default Square