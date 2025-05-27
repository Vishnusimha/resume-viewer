import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef
{
    public static void main(String[] args) throws java.lang.Exception
    {

        System.out.println(solution("Java programming language is versatile."));

    }

    public static String solution(String str) {
        String result = "";

        String[] strArr = str.split(" ");
        StringBuilder sb = new StringBuilder();

        for (String word: strArr) {
            if (word.length() % 2 == 0) {

                for (int i = 0; i < word.length(); i++) {
                    if (i % 2 != 0) {
                        sb.append(word.charAt(i));
                    }
                }

            }
        }

        return sb.toString();
    }

}