#include <iostream>
using namespace std;
int main() {
    for (int i = 5; i >= 1; --i) {
        // Print leading spaces
        for (int j = 5; j > i; --j) {
            cout << " ";
        }

        // Print numbers in descending order
        for (int k = i; k >= 1; --k) {
            cout << k << " "; // Added space after each number
        }

    cout << std::endl;
    }
    return 0;
}

        