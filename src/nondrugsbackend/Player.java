package nondrugsbackend;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class Player {

    private ArrayList<Tile> hand;
    private String name;

    public Player(int randomSeed, String name) {
        this.name = name;
        this.hand = new ArrayList<>();
        initBag(randomSeed);
    }

    private void initBag(int randomSeed) {
        ArrayList<Tile> bag = new ArrayList<>(Bag.getTiles());
        Collections.shuffle(bag, new Random(randomSeed));
        for (int i = 0; i < 7 && i < bag.size(); i++) {
            hand.add(bag.get(i));
        }
    }

    public ArrayList<Tile> getHand() {
        return hand;
    }

    public String getName() {
        return name;
    }

    public void addTile(Tile t) {
        hand.add(t);
    }

    public void removeTile(Tile t) {
        hand.remove(t);
    }
}
