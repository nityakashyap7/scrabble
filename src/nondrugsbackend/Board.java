package nondrugsbackend;

public class Board {
    private int size;
    private int x;
    private int y;
    private Square[][] squares;
    private Tile[][] tiles;
    private Tile[][] placedTiles;

    public Board(int size) {
        this.size = size;
        this.x = size;
        this.y = size;

        squares = new Square[15][15];
        tiles = new Tile[15][15];
        placedTiles = new Tile[15][15];

        int[][] coords = {
            {0, 0}, {7, 0}, {14, 0}, {0, 7},
            {14, 7}, {0, 14}, {7, 14}, {14, 14}
        };
        for (int[] c : coords) {
            squares[c[0]][c[1]] = new Square(calcX(c[0]), calcY(c[1]), "triple", "word", size);
        }

        int[][] coords2 = {
            {1, 1}, {13, 1}, {2, 2}, {12, 2}, {3, 3}, {11, 3},
            {4, 4}, {10, 4}, {7, 7}, {4, 10}, {10, 10}, {3, 11},
            {11, 11}, {2, 12}, {12, 12}, {1, 13}, {13, 13}
        };
        for (int[] c : coords2) {
            squares[c[0]][c[1]] = new Square(calcX(c[0]), calcY(c[1]), "double", "word", size);
        }

        int[][] coords3 = {
            {5, 1}, {9, 1}, {1, 5}, {5, 5}, {9, 5}, {13, 5}
        };
        for (int[] c : coords3) {
            squares[c[0]][c[1]] = new Square(calcX(c[0]), calcY(c[1]), "triple", "letter", size);
        }
    }

    private int calcX(int col) {
        return x + col * size;
    }

    private int calcY(int row) {
        return y + row * size;
    }

    public Square[][] getSquares() {
        return squares;
    }

    public Tile[][] getTiles() {
        return tiles;
    }

    public Tile[][] getPlacedTiles() {
        return placedTiles;
    }
}
