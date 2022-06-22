//static methods and properties

//static method is always called with class name
class Person{
    constructor(fName, Lname, age){
        this.fName=fName;
        this.Lname=Lname
        this.age=age;
    }
    //static method
    static classInfo(){
        console.log("this is fucking awesom")

    }
    //static properties
    static desc="static properties"
    get fullName(){
        return `${this.fName} ${this.Lname}`;
    }
    setName(fName, Lname){
        this.fName=fName;
        this.Lname=Lname;

        
    }
    set fullName(fullName){
        //destructures
        const [fName, Lname]=fullName.split(" ")//" ": it breaks from the space
        this.fName=fName;
        this.Lname=Lname;
    }
    eat(){
        return `${this.fName} is eating`
    }
}
//calling static with class Name Person
const info=Person.classInfo();
console.log(info)