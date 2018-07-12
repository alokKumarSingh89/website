function Person(first,last,age,gender,interests){
    this.name ={
        first,last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}
Person.prototype.greeting = function(){
    alert("HI! I am "+this.name.first)
}

function Teacher(first, last, age, gender, interests, subject){
    Person.call(this,first, last, age, gender, interests)
    this.subject = subject
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
var p1 = new Teacher('Alok','Singh',29,'Male','Programing','JavaScript')
console.dir(p1)