//program to create an array take input and traverse the array..

//program to create an array take input and find sum of element in the array suoppse array -1,2,3,4,5  output:15

//program to count  no of even and odd number in an array.. 1,2,3,4,5 even numberes =2,oddnumbers=3..

//program to largest number in a array 1,2,3,4,5 output:5...

//program to find frequency of a number in an array.  1,2,3,4,5,2 2 output:3

//swap two numbers..

//prgram to reverse a given array

//program to search an element in array. 1,2,3,4,5 search element =4  output:3..


//array rotation 

import java.util.Scanner;

public class ArrayExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Ask for the size of the array
        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();

        // Create an array of the given size
        int[] arr = new int[size];

        // Take input from the user
        System.out.println("Enter " + size + " elements:");
        for (int i = 0; i < size; i++) {
            arr[i] = scanner.nextInt();
        }

        // Traverse and print the array
        System.out.println("Array elements are:");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }
        
        // Close the scanner
        scanner.close();
    }
}
