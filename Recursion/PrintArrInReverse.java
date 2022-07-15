package Recursion;

public class PrintArrInReverse {

    public static int sizer = 1;

    public static int ArrRev(int arr[]) {
        if (sizer == 0)
            return 0;
        System.out.println(arr[sizer - 1]);
        sizer--;
        ArrRev(arr);
        return 0;
    }

    public static void main(String[] args) {
        int a[] = { 1, 2, 3, 4, 5 };
        sizer = a.length;
        ArrRev(a);
    }
}
