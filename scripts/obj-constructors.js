// * OBJECT CONSTRUCTOR EXERCISES

/**
 * Create a function that creates Student objects. For the purposes of this
 * exercise, students will only be taking a single course.
 * Return the Student object;
 * 
 * Students should have the following properties: course, age, grade
 * 
 * @param {Number} age 
 * @param {String} course 
 * @param {Number} grade 
 * @returns {Student}
 */
function Student(course, age, grade) {
    this.course = course;
    this.age = age;
    this.grade = grade;
}

const student1 = new Student("front end", 99, 95);

/**
 * Create an Army!
 * 
 * Write a constructor that produces Soldier objects.
 * This time, you will supply the parameters of your Soldiers.
 * Please include at least 3 parameters for your Soldier object.
 * 
 * 
 * @returns {Soldier}
 */
function Soldier(age, salary, rank) {
    this.age = age;
    this.salary = salary;
    this.rank = rank;
}


/**
 * Write a constructor that creates a Helicopter object.
 * You may include as many properties as you would like, 
 * but this time please include at least one method of your 
 * chosing.
 * 
 */
function Helicopter(material, age, speed, sound) {
    // TODO Finish the function
    this.material = material;
    this.age = age;
    this.speed = speed;
    this.sound = function() {
        return sound;
    }
}


/**
 * Please write a class that creates a Dog of a breed other than Pug.
 * You may follow the example I left if pug.js. Be sure to include a constructor
 * method and at least one other method. Your properties may be anything 
 * you would like. Please include a method that returns your dog's age.
 * 
 */
export class BelgianMalinois {

    constructor(age, friendliness, color) {
        this.age = age;
        this.friendliness = friendliness;
        this.color = color;
    }
    someoneCameNearMe() {
        return "Chomp!";
    }
}


const dog1 = new BelgianMalinois(1, 0, "faun");
const dog2 = new BelgianMalinois(10, 100, "black");

let index = 1; 
let dogArray = [];
while(index <= 100) {
    dogArray.push(new BelgianMalinois(2, 0, "Green"));
}
