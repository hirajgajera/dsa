public class hello {
    public static int ctr = 0;

    public static int printName() {
        System.out.println("Hiraj");
        ctr++;
        if (ctr == 5)
            return 0;
        printName();
        return 0;
    }

    public static void main(String[] args) {
        printName();
    }
}