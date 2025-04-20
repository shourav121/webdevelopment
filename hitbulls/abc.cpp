#include<iostream>
using namespace std;
int main(){
    int m,n;
    cout<<" enter number of rows : ";
    cin>>m;
    cout<<"enter number of columns : ";
    cin>>n;
    int arr[m][n];
    cout<<"enter the elemrnts of array : "<<endl;
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            cin>>arr[i][j];
        }
    }

    cout<<"the elements of array are : "<<endl;
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }
    int sum=0;
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            sum=sum+arr[i][j];
        }
    }
    cout<<"the sum of elements is : "<<sum;
}