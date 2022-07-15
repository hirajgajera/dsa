// Printing the name using recursion
package Recursion;

public class PrintName {

    public static int PrintTheName(int i, int n) {
        if (i > n)
            return 0;
        System.out.println("Hiraj");
        PrintTheName(i + 1, n);
        return 0;
    }

    public static void main(String[] args) {
        PrintTheName(1, 5);
    }
}
