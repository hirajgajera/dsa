package Recursion;
// Sum of items in array using recursion

public class Sum {

    public static int ctr = 0;
    public static int sum = 0;

    public static int doIt(int[] array) {
        if (array.length == ctr) {
            System.out.println(sum);
            return 0;
        }
        sum = sum + array[ctr];
        ctr++;
        doIt(array);
        return 0;
    }

    public static void main(String[] args) {
        int myArray[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        doIt(myArray);
    }
}
