class Tile {
    constructor(letter, value, size) {
        this.x = 0
        this.y = 0
        this.letter = letter
        this.value = value
        this.size = size
    }

    draw(c) {
        c.beginPath()
        c.fillStyle = "burlywood"
        c.fillRect(this.x-this.size/2, this.y-this.size/2, this.size, this.size)
        c.font = this.size*2/3 + "px Arial"
        c.fillStyle = "black"
        c.textAlign = "center"
        c.textBaseline = "middle"
        c.fillText(this.letter, this.x, this.y)
        c.font = this.size/3 + "px Arial"
        c.textAlign = "right"
        c.textBaseline = "bottom"
        c.fillText(this.value, this.x+this.size/2, this.y+this.size/2)
    }

    move(x, y) {
        this.x = x
        this.y = y
    }

    getValue() {
        return this.value
    }

    clicked(x, y) {
        const half = this.size/2
        if (x < this.x-half || x > this.x+half || y < this.y-half || y > this.y+half)
            return false
        return true
    }
}

export default Tile