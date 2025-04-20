#include <iostream>
using namespace std;
long long factorial(int n) {
    if (n < 0) {
        return -1; 
    }
    if (n == 0 || n == 1) {
        return 1;
    }
    long long   result = 1;
    for (int i = 2; i <= n; ++i) {
        result *= i;
    }
    return result;
}

int main() {
    int num;
    cout << "Enter a non-negative integer: ";
    cin >> num;

    long long fact = factorial(num);

    if (fact == -1) {
        cout << "Factorial is not defined for negative numbers." << std::endl;
    } else {
    cout << "Factorial of " << num << " is: " << fact << std::endl;
    }

    return 0;
}