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
            this.squares.push(new Array(15).fill(null))
            this.tiles.push(new Array(15).fill(null))
            this.placedTiles.push(new Array(15).fill(null))
        }

        this.squares[0][0] = new Square(this.calcX(0), this.calcY(0), "triple", "word", size)
        this.squares[7][0] = new Square(this.calcX(7), this.calcY(0), "triple", "word", size)
        this.squares[14][0] = new Square(this.calcX(14), this.calcY(0), "triple", "word", size)
        this.squares[0][7] = new Square(this.calcX(0), this.calcY(7), "triple", "word", size)
        this.squares[14][7] = new Square(this.calcX(14), this.calcY(7), "triple", "word", size)
        this.squares[0][14] = new Square(this.calcX(0), this.calcY(14), "triple", "word", size)
        this.squares[7][14] = new Square(this.calcX(7), this.calcY(14), "triple", "word", size)
        this.squares[14][14] = new Square(this.calcX(14), this.calcY(14), "triple", "word", size)

        this.squares[1][1] = new Square(this.calcX(1), this.calcY(1), "double", "word", size)
        this.squares[13][1] = new Square(this.calcX(13), this.calcY(1), "double", "word", size)
        this.squares[2][2] = new Square(this.calcX(2), this.calcY(2), "double", "word", size)
        this.squares[12][2] = new Square(this.calcX(12), this.calcY(2), "double", "word", size)
        this.squares[3][3] = new Square(this.calcX(3), this.calcY(3), "double", "word", size)
        this.squares[11][3] = new Square(this.calcX(11), this.calcY(3), "double", "word", size)
        this.squares[4][4] = new Square(this.calcX(4), this.calcY(4), "double", "word", size)
        this.squares[10][4] = new Square(this.calcX(10), this.calcY(4), "double", "word", size)
        this.squares[7][7] = new Square(this.calcX(7), this.calcY(7), "double", "word", size)
        this.squares[4][10] = new Square(this.calcX(4), this.calcY(10), "double", "word", size)
        this.squares[10][10] = new Square(this.calcX(10), this.calcY(10), "double", "word", size)
        this.squares[3][11] = new Square(this.calcX(3), this.calcY(11), "double", "word", size)
        this.squares[11][11] = new Square(this.calcX(11), this.calcY(11), "double", "word", size)
        this.squares[2][12] = new Square(this.calcX(2), this.calcY(12), "double", "word", size)
        this.squares[12][12] = new Square(this.calcX(12), this.calcY(12), "double", "word", size)
        this.squares[1][13] = new Square(this.calcX(1), this.calcY(13), "double", "word", size)
        this.squares[13][13] = new Square(this.calcX(13), this.calcY(13), "double", "word", size)
        
        this.squares[5][1] = new Square(this.calcX(5), this.calcY(1), "triple", "letter", size)
        this.squares[9][1] = new Square(this.calcX(9), this.calcY(1), "triple", "letter", size)
        this.squares[1][5] = new Square(this.calcX(1), this.calcY(5), "triple", "letter", size)
        this.squares[5][5] = new Square(this.calcX(5), this.calcY(5), "triple", "letter", size)
        this.squares[9][5] = new Square(this.calcX(9), this.calcY(5), "triple", "letter", size)
        this.squares[13][5] = new Square(this.calcX(13), this.calcY(5), "triple", "letter", size)
        this.squares[1][9] = new Square(this.calcX(1), this.calcY(9), "triple", "letter", size)
        this.squares[5][9] = new Square(this.calcX(5), this.calcY(9), "triple", "letter", size)
        this.squares[9][9] = new Square(this.calcX(9), this.calcY(9), "triple", "letter", size)
        this.squares[13][9] = new Square(this.calcX(13), this.calcY(9), "triple", "letter", size)
        this.squares[5][13] = new Square(this.calcX(5), this.calcY(13), "triple", "letter", size)
        this.squares[9][13] = new Square(this.calcX(9), this.calcY(13), "triple", "letter", size)

        this.squares[3][0] = new Square(this.calcX(3), this.calcY(0), "double", "letter", size)
        this.squares[11][0] = new Square(this.calcX(11), this.calcY(0), "double", "letter", size)
        this.squares[6][2] = new Square(this.calcX(6), this.calcY(2), "double", "letter", size)
        this.squares[8][2] = new Square(this.calcX(8), this.calcY(2), "double", "letter", size)
        this.squares[0][3] = new Square(this.calcX(0), this.calcY(3), "double", "letter", size)
        this.squares[7][3] = new Square(this.calcX(7), this.calcY(3), "double", "letter", size)
        this.squares[14][3] = new Square(this.calcX(14), this.calcY(3), "double", "letter", size)
        this.squares[2][6] = new Square(this.calcX(2), this.calcY(6), "double", "letter", size)
        this.squares[6][6] = new Square(this.calcX(6), this.calcY(6), "double", "letter", size)
        this.squares[8][6] = new Square(this.calcX(8), this.calcY(6), "double", "letter", size)
        this.squares[12][6] = new Square(this.calcX(12), this.calcY(6), "double", "letter", size)
        this.squares[3][7] = new Square(this.calcX(3), this.calcY(7), "double", "letter", size)
        this.squares[11][7] = new Square(this.calcX(11), this.calcY(7), "double", "letter", size)
        this.squares[2][8] = new Square(this.calcX(2), this.calcY(8), "double", "letter", size)
        this.squares[6][8] = new Square(this.calcX(6), this.calcY(8), "double", "letter", size)
        this.squares[8][8] = new Square(this.calcX(8), this.calcY(8), "double", "letter", size)
        this.squares[12][8] = new Square(this.calcX(12), this.calcY(8), "double", "letter", size)
        this.squares[0][11] = new Square(this.calcX(0), this.calcY(11), "double", "letter", size)
        this.squares[7][11] = new Square(this.calcX(7), this.calcY(11), "double", "letter", size)
        this.squares[14][11] = new Square(this.calcX(14), this.calcY(11), "double", "letter", size)
        this.squares[6][12] = new Square(this.calcX(6), this.calcY(12), "double", "letter", size)
        this.squares[8][12] = new Square(this.calcX(8), this.calcY(12), "double", "letter", size)
        this.squares[3][14] = new Square(this.calcX(3), this.calcY(14), "double", "letter", size)
        this.squares[11][14] = new Square(this.calcX(11), this.calcY(14), "double", "letter", size)
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
        if (this.tiles[i][j] || this.placedTiles[i][j])
            return false
        this.placedTiles[i][j] = tile
        tile.move(this.calcX(i), this.calcY(j))
        return true
    }

    reset() {
        for (let i = 0; i < 15; i++)
            for (let j = 0; j < 15; j++)
                this.placedTiles[i][j] = null
    }

    score() {
        if (!this.valid())
            return 0
        //finding main column/row, start and end of word
        let column = -1, row = -1
        let startI = -1, startJ = -1
        let endI = -1, endJ = -1
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                if (this.placedTiles[i][j]) {
                    if (column == -1 && row == -1) {
                        column = startI = i;
                        row = startJ = j;
                    } else if (column != -1 && row != -1) {
                        if (column == i)
                            row = -1
                        else if (row == j)
                            column = -1
                        else
                            return false
                    } else if (column != i && row != j) {
                        return false
                    }
                    endI = i
                    endJ = j
                }
            }
        }
        //zero tiles case
        if (column == -1 && row == -1) {
            return 0
        }
        //words
        let score = 0
        let i = startI, j = startJ
        if (column != -1) {
            score += this.scoreColumn(i, j)
            while (this.isTileOrPlaced(i, j)) {
                if (this.placedTiles[i][j]) {
                    score += this.scoreRow(i, j)
                }
                j++
            }
        } else {
            score += this.scoreRow(i, j)
            while (this.isTileOrPlaced(i, j)) {
                if (this.placedTiles[i][j]) {
                    score += this.scoreColumn(i, j)
                }
                i++
            }
        }
        return score
    }

    scoreColumn(i, startJ) {
        //single letter case
        if (!this.isTileOrPlaced(i, startJ-1) && !this.isTileOrPlaced(i, startJ+1))
            return 0

        let score = 0
        let wordMult = 1, letterMult = 1

        let j = startJ
        console.log(j)
        while (this.isTileOrPlaced(i, j-1)) {
            j--
        }
        while (this.isTileOrPlaced(i, j)) {
            if (this.squares[i][j] && this.placedTiles[i][j]) {
                wordMult *= this.squares[i][j].wordMult()
                letterMult = this.squares[i][j].letterMult()
            }
            score += this.tiles[i][j] ? this.tiles[i][j].getValue()*letterMult : this.placedTiles[i][j].getValue()*letterMult
            j++
            letterMult = 1
        }
        return score * wordMult
    }

    scoreRow(startI, j) {
        //single letter case
        if (!this.isTileOrPlaced(startI-1, j) && !this.isTileOrPlaced(startI+1, j))
            return 0

        let score = 0
        let wordMult = 1, letterMult = 1
        
        let i = startI
        while (this.isTileOrPlaced(i-1, j)) {
            i--
        }
        while (this.isTileOrPlaced(i, j)) {
            if (this.squares[i][j] && this.placedTiles[i][j]) {
                wordMult *= this.squares[i][j].wordMult()
                letterMult = this.squares[i][j].letterMult()
            }
            score += this.tiles[i][j] ? this.tiles[i][j].getValue()*letterMult : this.placedTiles[i][j].getValue()*letterMult
            i++
            letterMult = 1
        }
        return score * wordMult
    }

    isTileOrPlaced(i, j) {
        if (i < 0 || i > 14 || j < 0 || j > 14)
            return false
        return this.tiles[i][j] || this.placedTiles[i][j]
    }

    valid() {
        //all placed in same row/column
        let column = -1, row = -1
        let startI = -1, startJ = -1
        let endI = -1, endJ = -1
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                if (this.placedTiles[i][j]) {
                    if (column == -1 && row == -1) {
                        column = startI = i;
                        row = startJ = j;
                    } else if (column != -1 && row != -1) {
                        if (column == i)
                            row = -1
                        else if (row == j)
                            column = -1
                        else
                            return false
                    } else if (column != i && row != j) {
                        return false
                    }
                    endI = i
                    endJ = j
                }
            }
        }
        //zero tiles case
        if (column == -1 && row == -1) {
            return true
        }
        //forms at least one continuous word
        if (column != -1) {
            for (let j = startJ+1; j < endJ; j++) {
                if (!this.placedTiles[column][j] && !this.tiles[column][j]) {
                    return false
                }
            }
        } else {
            for (let i = startI+1; i < endI; i++) {
                if (!this.placedTiles[i][row] && !this.tiles[i][row]) {
                    return false
                }
            }
        }
        //attached to existing words (or is the first word)
        if (this.placedTiles[7][7] && (this.placedTiles[7][8] || this.placedTiles[7][6] || this.placedTiles[8][7] || this.placedTiles[6][7]))
            return true
        if (column != -1) {
            for (let j = startJ; j <= endJ; j++) {
                if (this.placedTiles[column][j]) {
                    if (this.isTile(column+1, j) || this.isTile(column-1, j) || this.isTile(column, j+1) || this.isTile(column, j-1))
                        return true
                }
            }
        } else {
            for (let i = startI; i <= endI; i++) {
                if (this.placedTiles[i][row]) {
                    if (this.isTile(i+1, row) || this.isTile(i-1, row) || this.isTile(i, row+1) || this.isTile(i, row-1))
                        return true
                }
            }
        }
        return false
    }

    isTile(i, j) {
        if (i < 0 || i > 14 || j < 0 || j > 14)
            return false
        return this.tiles[i][j] != null
    }

    endTurn() {
        for (let i = 0; i < 15; i++)
            for (let j = 0; j < 15; j++)
                if (this.placedTiles[i][j]) {
                    this.tiles[i][j] = this.placedTiles[i][j]
                    this.placedTiles[i][j] = null
                }
    }

    grabTile(x, y, hand) {
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                const tile = this.placedTiles[i][j]
                if (tile?.clicked(x, y)) {
                    this.placedTiles[i][j] = null
                    hand.addTile(tile)
                    return tile
                }
            }
        }
        return null
    }

    draw(c) {
        c.beginPath()
        
        this.squares.forEach((row) => {row.forEach((square) => {square?.draw(c)})})

        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                c.strokeRect(this.x-this.size/2 + this.size*i, this.y-this.size/2 + this.size*j, this.size, this.size)
            }
        }

        this.tiles.forEach((row) => {row.forEach((tile) => {tile?.draw(c)})})
        this.placedTiles.forEach((row) => {row.forEach((tile) => {tile?.draw(c)})})
    }

}

export default Board