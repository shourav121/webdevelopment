function table(n){
    for(let i =n;i<=n*10;i=i+n){
        console.log(i)
    }
}
// table(2)


///all n number add:---
//sum of all n number i.e:- 1+2+3+4+5+6+7............

function getSum(n){
    sum = 0;
    for(let i=1;i<=n;i++){
        sum=sum+i
    }
    return sum;
}

