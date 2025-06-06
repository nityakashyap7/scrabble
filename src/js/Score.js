class Score {
    constructor(size, name) {
        this.size = size
        this.x = this.size*16
        this.y = this.size*3
        this.name = name
        this.scores = []
        this.current = 0
    }

    setScore(score) {
        this.current = score
    }

    endTurn() {
        this.scores.push(this.current)
        this.current = 0
    }

    total() {
        let total = 0
        this.scores.forEach((score) => {total += score})
        return total + this.current
    }

    draw(c) {
        c.beginPath()
        c.font = this.size*2/3 + "px Arial"
        c.fillStyle = "black"
        c.textAlign = "left"
        c.textBaseline = "middle"
        c.fillText(this.name, this.x, this.y)

        c.moveTo(this.x, this.y+this.size/2)
        c.lineTo(this.x + c.measureText(this.name).width, this.y+this.size/2)
        c.stroke()

        c.font = this.size/3 + "px Arial"
        let i = 0
        for ( ; i < this.scores.length; i++)
            c.fillText(this.scores[i], this.x, this.y+this.size*(1+i/2))
        c.fillText("(" + this.current + ")", this.x, this.y+this.size*(1+i/2))

        c.font = this.size*2/3 + "px Arial"
        c.moveTo(this.x, this.y+this.size*(1.5+i/2))
        c.lineTo(this.x + c.measureText(this.name).width, this.y+this.size*(1.5+i/2))
        c.stroke()
        c.fillText(this.total(), this.x, this.y+this.size*(2+i/2))
    }
}

export default Score