package nondrugsbackend;

import java.util.*;

/* the bag of tiles that players draw from
 */
public class Bag {

    //TILE_SIZE
    private int size;
    //tiles left in the bag
    private LinkedList<Tile> tiles = new LinkedList<>();

    //initializes the 100 starting tiles
    public Bag(int size) {
        this.size = size;
        tiles.clear();
        // idx = 0;

        //lwk bro why u need to do the numbers urself idk if these values are correct kinda got gpt to generate them
        Object[][] datas = {
            {'A', 9, 1}, {'B', 2, 3}, {'C', 2, 3}, {'D', 4, 2}, {'E', 12, 1},
            {'F', 2, 4}, {'G', 3, 2}, {'H', 2, 4}, {'I', 9, 1}, {'J', 1, 8},
            {'K', 1, 5}, {'L', 4, 1}, {'M', 2, 3}, {'N', 6, 1}, {'O', 8, 1},
            {'P', 2, 3}, {'Q', 1, 10}, {'R', 6, 1}, {'S', 4, 1}, {'T', 6, 1},
            {'U', 4, 1}, {'V', 2, 4}, {'W', 2, 4}, {'X', 1, 8}, {'Y', 2, 4},
            {'Z', 1, 10}, {' ', 2, 0} 
        };

        for (Object[] data : datas) {
            char letter = (char) data[0];
            int count = (int) data[1];
            int value = (int) data[2];

            for (int i = 0; i < count; i++) {
                tiles.add(new Tile(letter, value, 0)); 
            }
        }

        Collections.shuffle(tiles);
    }

    public static ArrayList<Tile> getTiles() {
        return tiles;
    }

    public static Tile next() {
        int index = (int)(Math.random() * tiles.size());
        return tiles.remove(index);
    }
    

    public static void setBag(ArrayList<Tile> b) {
        tiles = b;
    }

    public static void shuffle() {
        Collections.shuffle(tiles);
        // idx = 0;
    }

    public int getSize() {
        return size;
    }
}
