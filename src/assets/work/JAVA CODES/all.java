import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef {
    public static void main(String[] args) throws java.lang.Exception {
        ArrayList<Integer> list1 = new ArrayList<>(Arrays.asList(1, 3, 7));
        ArrayList<Integer> list2 = new ArrayList<>(Arrays.asList(2, 8, 9));
        ArrayList<String> res = retrievePairs(list1, list2);

        // Print each pair from the result list
        for (String pair : res) {
            System.out.println(pair);
        }
    }

    public static ArrayList<String> retrievePairs(ArrayList<Integer> list1, ArrayList<Integer> list2) {
        ArrayList<String> result = new ArrayList<String>();

        for (int i : list1) {
            for (int j : list2) {
                if (i < j) {

                    result.add(i + " " + j);
                }
            }
        }

        return result;
    }

}