// const stud1={
//     name:"shourav",
//     age:77,
//     marks:14,
//     getMarks:function(){
//         return marks
//     },
// };
// const stud2={
//     name:"sumit",
//     age:76,
//     marks:14,
//     getMarks:function(){
//         return this.marks
//     }
// }; 

// const stud3={
//     name:"pintu",
//     age:97,
//     marks:34, getMarks:function(){
//         return this.marks
//     }
// };

//!NewOperator

//!CONSTRRUCTORS - doesn`t retun anything and start with capital letter.

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     console.log(this)
// }

// Person.prototype.talk=function(){
//     console.log(`hi may name is ${this.name}`)
// }

// let p1=new Person("shourav",33);
// let p2=new Person("sho",53);

//!class

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`my name is${this.name}`)
//     }
// }

// let p1=new Person("adam",88)

//!inheritance

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`i am ${this.name}`);
    }
}

class student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
}

class teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}