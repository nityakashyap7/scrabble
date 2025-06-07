package nondrugsbackend;

public class Square {
    private int x;
    private int y;
    private String mult;
    private String type;
    private int size;

    public Square(int x, int y, String mult, String type, int size) {
        this.x = x;
        this.y = y;
        this.mult = mult;
        this.type = type;
        this.size = size;
    }

    public int wordMult() {
        if ("letter".equals(type)) {
            return 1;
        }
        if ("double".equals(mult)) {
            return 2;
        }
        return 3;
    }

    public int letterMult() {
        if ("word".equals(type)) {
            return 1;
        }
        if ("double".equals(mult)) {
            return 2;
        }
        return 3;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public String getMult() {
        return mult;
    }

    public String getType() {
        return type;
    }

    public int getSize() {
        return size;
    }
}
