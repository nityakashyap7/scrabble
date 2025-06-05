import Square from './Square.js'

class Board {
    constructor(size) {
        this.size = size
        this.x = this.size
        this.y = this.size
        this.squares = []
        this.tiles = []
        this.placedTiles = []
        for (let i = 0; i < 15; i++) {
            this.tiles.push(new Array(15).fill(null))
            this.placedTiles.push(new Array(15).fill(null))
        }

        this.squares.push(new Square(this.calcX(0), this.calcY(0), "triple", "word", size))
        this.squares.push(new Square(this.calcX(7), this.calcY(0), "triple", "word", size))
        this.squares.push(new Square(this.calcX(14), this.calcY(0), "triple", "word", size))
        this.squares.push(new Square(this.calcX(0), this.calcY(7), "triple", "word", size))
        this.squares.push(new Square(this.calcX(14), this.calcY(7), "triple", "word", size))
        this.squares.push(new Square(this.calcX(0), this.calcY(14), "triple", "word", size))
        this.squares.push(new Square(this.calcX(7), this.calcY(14), "triple", "word", size))
        this.squares.push(new Square(this.calcX(14), this.calcY(14), "triple", "word", size))

        this.squares.push(new Square(this.calcX(1), this.calcY(1), "double", "word", size))
        this.squares.push(new Square(this.calcX(13), this.calcY(1), "double", "word", size))
        this.squares.push(new Square(this.calcX(2), this.calcY(2), "double", "word", size))
        this.squares.push(new Square(this.calcX(12), this.calcY(2), "double", "word", size))
        this.squares.push(new Square(this.calcX(3), this.calcY(3), "double", "word", size))
        this.squares.push(new Square(this.calcX(11), this.calcY(3), "double", "word", size))
        this.squares.push(new Square(this.calcX(4), this.calcY(4), "double", "word", size))
        this.squares.push(new Square(this.calcX(10), this.calcY(4), "double", "word", size))
        this.squares.push(new Square(this.calcX(7), this.calcY(7), "double", "word", size))
        this.squares.push(new Square(this.calcX(4), this.calcY(10), "double", "word", size))
        this.squares.push(new Square(this.calcX(10), this.calcY(10), "double", "word", size))
        this.squares.push(new Square(this.calcX(3), this.calcY(11), "double", "word", size))
        this.squares.push(new Square(this.calcX(11), this.calcY(11), "double", "word", size))
        this.squares.push(new Square(this.calcX(2), this.calcY(12), "double", "word", size))
        this.squares.push(new Square(this.calcX(12), this.calcY(12), "double", "word", size))
        this.squares.push(new Square(this.calcX(1), this.calcY(13), "double", "word", size))
        this.squares.push(new Square(this.calcX(13), this.calcY(13), "double", "word", size))
        
        this.squares.push(new Square(this.calcX(5), this.calcY(1), "triple", "letter", size))
        this.squares.push(new Square(this.calcX(9), this.calcY(1), "triple", "letter", size))
        this.squares.push(new Square(this.calcX(1), this.calcY(5), "triple", "letter", size))
        this.squares.push(new Square(this.calcX(5), this.calcY(5), "triple", "letter", size))
        this.squares.push(new Square(this.calcX(9), this.calcY(5), "triple", "letter", size))
        this.squares.push(new Square(this.calcX(13), this.calcY(5), "triple", "letter", size))
        this.squares.push(new Square(this.calcX(1), this.calcY(9), "triple", "letter", size))
        this.squares.push(new Square(this.calcX(5), this.calcY(9), "triple", "letter", size))
        this.squares.push(new Square(this.calcX(9), this.calcY(9), "triple", "letter", size))
        this.squares.push(new Square(this.calcX(13), this.calcY(9), "triple", "letter", size))
        this.squares.push(new Square(this.calcX(5), this.calcY(13), "triple", "letter", size))
        this.squares.push(new Square(this.calcX(9), this.calcY(13), "triple", "letter", size))

        this.squares.push(new Square(this.calcX(3), this.calcY(0), "double", "letter", size))
        this.squares.push(new Square(this.calcX(11), this.calcY(0), "double", "letter", size))
        this.squares.push(new Square(this.calcX(6), this.calcY(2), "double", "letter", size))
        this.squares.push(new Square(this.calcX(8), this.calcY(2), "double", "letter", size))
        this.squares.push(new Square(this.calcX(0), this.calcY(3), "double", "letter", size))
        this.squares.push(new Square(this.calcX(7), this.calcY(3), "double", "letter", size))
        this.squares.push(new Square(this.calcX(14), this.calcY(3), "double", "letter", size))
        this.squares.push(new Square(this.calcX(2), this.calcY(6), "double", "letter", size))
        this.squares.push(new Square(this.calcX(6), this.calcY(6), "double", "letter", size))
        this.squares.push(new Square(this.calcX(8), this.calcY(6), "double", "letter", size))
        this.squares.push(new Square(this.calcX(12), this.calcY(6), "double", "letter", size))
        this.squares.push(new Square(this.calcX(3), this.calcY(7), "double", "letter", size))
        this.squares.push(new Square(this.calcX(11), this.calcY(7), "double", "letter", size))
        this.squares.push(new Square(this.calcX(2), this.calcY(8), "double", "letter", size))
        this.squares.push(new Square(this.calcX(6), this.calcY(8), "double", "letter", size))
        this.squares.push(new Square(this.calcX(8), this.calcY(8), "double", "letter", size))
        this.squares.push(new Square(this.calcX(12), this.calcY(8), "double", "letter", size))
        this.squares.push(new Square(this.calcX(0), this.calcY(11), "double", "letter", size))
        this.squares.push(new Square(this.calcX(7), this.calcY(11), "double", "letter", size))
        this.squares.push(new Square(this.calcX(14), this.calcY(11), "double", "letter", size))
        this.squares.push(new Square(this.calcX(6), this.calcY(12), "double", "letter", size))
        this.squares.push(new Square(this.calcX(8), this.calcY(12), "double", "letter", size))
        this.squares.push(new Square(this.calcX(3), this.calcY(14), "double", "letter", size))
        this.squares.push(new Square(this.calcX(11), this.calcY(14), "double", "letter", size))
    }

    calcX(x) {
        return this.x + this.size*x
    }

    calcY(y) {
        return this.y + this.size*y
    }

    placeTile(x, y, tile) {
        const half = this.size/2
        if (x < this.x-half || x > this.x+half*29 || y < this.y-half || y > this.y+half*29)
            return false
        const i = Math.floor((x-this.x+half) / this.size)
        const j = Math.floor((y-this.y+half) / this.size)
        if (this.tiles[i][j])
            return false
        this.tiles[i][j] = tile
        this.placedTiles[i][j] = true
        tile.move(this.calcX(i), this.calcY(j))
        return true
    }

    reset() {
        for (let i = 0; i < 15; i++)
            for (let j = 0; j < 15; j++)
                if (this.placedTiles[i][j])
                    this.tiles[i][j] = null
    }

    endTurn() {
        for (let i = 0; i < 15; i++)
            for (let j = 0; j < 15; j++)
                this.placedTiles[i][j] = null
    }

    draw(c) {
        c.beginPath()
        
        this.squares.forEach((square) => {square.draw(c)})

        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                c.strokeRect(this.x-this.size/2 + this.size*i, this.y-this.size/2 + this.size*j, this.size, this.size)
            }
        }

        this.tiles.forEach((row) => {row.forEach((tile) => {tile?.draw(c)})})
    }

}

export default Board