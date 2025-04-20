//sum of first n natural number using recursion


#include <iostream>

// Recursive function to calculate the sum of the first n natural numbers
int sumOfNaturalNumbers(int n) {
    if (n == 0) {
        return 0; // Base case: sum of 0 numbers is 0
    } else {
        return n + sumOfNaturalNumbers(n - 1); // Recursive step
    }
}

int main() {
    int n;
    std::cout << "Enter a positive integer n: ";
    std::cin >> n;

    if (n < 0) {
        std::cout << "Please enter a positive integer." << std::endl;
        return 1; // Indicate an error
    }

    int sum = sumOfNaturalNumbers(n);
    std::cout << "The sum of the first " << n << " natural numbers is: " << sum << std::endl;

    return 0;
}