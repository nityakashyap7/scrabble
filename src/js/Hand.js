import Bag from './Bag.js'

class Hand {
    constructor(size, bag) {
        this.size = size
        this.x = this.size
        this.y = this.size*17
        this.tiles = []
        this.placedTiles = []
        this.drawTiles(bag)
        this.alignTiles()
    }

    emptyTiles() {
        return 7-this.tiles.length
    }

    drawTiles(bag) {
        if (bag instanceof Bag)
            this.tiles.push(...bag.drawTiles(7-this.tiles.length))
        this.placedTiles = []
    }

    alignTiles() {
        this.tiles.sort((a, b) => a.x-b.x)
        for (let i = 0; i < this.tiles.length; i++) {
            this.tiles[i].move(this.x + this.size*i, this.y)
        }
    }

    grabTile(x, y) {
        for (let tile of this.tiles) {
            if (tile.clicked(x, y)) {
                return tile
            }
        }
        return null
    }

    placeTile(tile) {
        for (let i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i] == tile) {
                this.tiles.splice(i, 1)
                this.placedTiles.push(tile)
                return
            }
        }
    }

    reset() {
        this.tiles.push(...this.placedTiles)
        this.placedTiles = []
    }

    draw(c) {
        this.tiles.forEach((tile) => {tile.draw(c)})
        c.beginPath()
        c.moveTo(this.x-this.size/2, this.y+this.size/2)
        c.lineTo(this.x-this.size/2 + this.size*7, this.y+this.size/2)
        c.stroke()
    }
}

export default Hand