#include <iostream>
#include <iomanip> //
using namespace std;
int main() {
    int rows = 5;
    int maxLetters = 4; // 
    int maxSpaces = (rows - 1) * 2 + maxLetters * 2 -2; // Calculate max spaces for centering

    for (int i = 0; i < rows; ++i) {
        
        int currentLetters = i;
        int currentSpaces = maxSpaces - (currentLetters * 2);
        int leadingSpaces = currentSpaces / 2;


        cout << std::setw(leadingSpaces) << "";

        
        for (int k = 0; k <= i; ++k) {
            cout << static_cast<char>('A' + k) << " ";
        }

        cout <<endl;
    }

    return 0;
}