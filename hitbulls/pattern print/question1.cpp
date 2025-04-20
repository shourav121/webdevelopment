// 54321
// 4321
// 321
// 21
// 1

#include <iostream>

int main() {
    for (int i = 5; i >= 1; i--) {  
        for (int j = i; j >= 1; j--) {  
            std::cout << j;
        }
        std::cout << std::endl;  
    }
    return 0;
}
