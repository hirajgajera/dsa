package July7;

public class PrintName {
    public static int ctr = 0;

    public static int PrintTheName() {
        System.out.println("Hiraj");
        ctr++;
        if (ctr == 5)
            return 0;
        PrintTheName();
        return 0;
    }

    public static void main(String[] args) {
        PrintTheName();
    }
}
