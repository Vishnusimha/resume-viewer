import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef {
    public static void main(String[] args) throws java.lang.Exception {
        int[] arrayA = {
                2,
                4,
                3,
                1,
                6
        };

        int[] arrayB = {
                4,
                0,
                3,
                2,
                0
        };
        System.out.println("Maximum value encountered in arrayB: " + solution(arrayA, arrayB));
    }

    public static int solution(int[] arrA, int[] arrB) {
        int indexA = 0;
        int indexB = 0;
        int highest = Integer.MIN_VALUE;
        boolean inA = true;

        while (true) {
            if (inA) {
                indexB = arrA[indexA];
                if (arrB[indexB] > highest) {
                    highest = arrB[indexB];
                }
            } else {
                indexA = arrB[indexB];
                if (indexA == 0) {
                    return highest;
                }
            }
            inA = !inA;
        }

    }

}