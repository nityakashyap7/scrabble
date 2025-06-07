package nondrugsbackend;

public class Tile {
    private int x;
    private int y;
    private char letter;
    private int value;
    private int size;

    public Tile(char letter, int value, int size) {
        this.letter = letter;
        this.value = value;
        this.size = size;
        this.x = 0;
        this.y = 0;
    }

    public void move(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getValue() {
        return value;
    }

    public boolean clicked(int mouseX, int mouseY) {
        int half = size / 2;
        return mouseX >= x - half && mouseX <= x + half &&
               mouseY >= y - half && mouseY <= y + half;
    }

    public char getLetter() {
        return letter;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public int getSize() {
        return size;
    }
}
