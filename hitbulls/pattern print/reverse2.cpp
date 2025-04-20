// 15 14 13 12 11 
// 10 9 8 7
// 6 5 4
// 3 2
// 1


//formula :-n*(n+1)/2




#include<iostream>
using namespace std;
int main(){
    int a=21;
    for(int r=6;r>=1;r--){
        for(int c=1;c<=r;c++){
            cout<<a;
            a--;
            cout<<" ";
        }
        cout<<endl;
    }
}

