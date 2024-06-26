
import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

import java.util.stream.Collectors;

public class Solution {

//    zeksta pb1 solution using list and regex function

    /*
     * Complete the virusIndices function below.
     */
    static List<Integer> virusIndices(String p, String v) {
        List<Integer> z = z_function(v + "#" + p);
        List<Integer> z_reversed = z_function(new StringBuilder(v).reverse().toString() + "#" + new StringBuilder(p).reverse().toString());
        List<Integer> ans = new ArrayList<>();
        for (int i = 0; i <= p.length() - v.length(); ++i) {
            if (z.get(i + v.length() + 1) + z_reversed.get(p.length() - i + 1) >= v.length() - 1) {
                ans.add(i);
            }
        }
        return ans;
    }

    private static List<Integer> z_function(String s) {
        List<Integer> z = new ArrayList(s.length());
        z.add(0);
        int l = 0;
        int r = 0;
        for (int i = 1; i < s.length(); ++i) {
            int z_i = 0;
            if (i <= r)
                z_i = r - i + 1 < z.get(i - l) ? r - i + 1 : z.get(i - l);
            while (i + z_i < s.length() && s.charAt(z_i) == s.charAt(i + z_i))
                ++z_i;
            if (i + z_i - 1 > r) {
                l = i;
                r = i + z_i - 1;
            }
            z.add(z_i);
        }
        return z;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int t = Integer.parseInt(scanner.nextLine().trim());

        for (int tItr = 0; tItr < t; tItr++) {
            String[] pv = scanner.nextLine().split(" ");

            String p = pv[0];

            String v = pv[1];

            List<Integer> answer = virusIndices(p, v);
            if (answer.size() == 0) {
                System.out.println("No Match!");
            } else {
                System.out.println(answer.stream().map(String::valueOf).collect(Collectors.joining(" ")));
            }
        }
    }
}

