package nondrugsbackend;

public class Button {
    private int x;
    private int y;
    private int l;
    private int w;
    private String text;
    private String text2;
    private boolean hover;

    public Button(int x, int y, int l, int w, String text, String text2) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.w = w;
        this.text = text;
        this.text2 = text2;
        this.hover = false;
    }

    public void hovering(int mouseX, int mouseY) {
        this.hover = clicked(mouseX, mouseY);
    }

    public boolean clicked(int mouseX, int mouseY) {
        return !(mouseX < x - l / 2 || mouseX > x + l / 2 ||
                 mouseY < y - w / 2 || mouseY > y + w / 2);
    }

    public boolean isHovering() {
        return hover;
    }

    public String getText() {
        return text;
    }

    public String getText2() {
        return text2;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public int getLength() {
        return l;
    }

    public int getWidth() {
        return w;
    }
}
