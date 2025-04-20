// #include<iostream>
// using namespace std;
// int main()
// {
//     int r,c;
//     int number = 1;
//     for(r=1; r<=5; r++){
//     for(c=1; c<=r; c++){
//         cout<<number;
//         number++;
//         cout<<" ";
//     }
    
//     cout<<endl;
//     }
// }




//reverse of number 



#include<iostream>
using namespace std;
int main(){
    int a=1;
    for(int r=5;r>=1;r--){
        for(int c=1;c<=r;c++){
            cout<<c;
            a++;
            cout<<" ";
        }
        cout<<endl;
    }
}

