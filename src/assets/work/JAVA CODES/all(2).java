import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef
{
    public static void main(String[] args) throws java.lang.Exception
    {

        System.out.println(solution(new ArrayList < > (Arrays.asList(2, 3, 3, 4, 2, 4)), 4));

    }

    public static int solution(ArrayList < Integer > numbers, int obstacle) {
        int position = 0;
        int moves = 0;

        while (position < numbers.size()) {
            if (numbers.get(position) == obstacle) {
                return position;
            }
            moves++;
            position = position + numbers.get(position);
        }

        return moves;
    }

}