class Score {
    constructor(size) {
        this.size = size
        this.x = this.size*16
        this.y = this.size*3
        this.total = 0
        this.current = 0
    }

    setScore(score) {
        this.current = score
    }

    endTurn() {
        this.total += this.current
        this.current = 0
    }

    draw(c) {
        c.beginPath()
        c.font = this.size*2/3 + "px Arial"
        c.fillStyle = "black"
        c.textAlign = "left"
        c.textBaseline = "middle"
        c.fillText("score: " + this.total, this.x, this.y)
        c.fillText("(" + this.current + ")", this.x, this.y+this.size)
    }
}

export default Score