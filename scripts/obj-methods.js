import Pug from './pug';
// * OBJECT METHOD EXERCISES


/**
 * Given a Pug Object, add a method to it. Then, return that object.
 * The method may be anything that describes something about Pugs, or dogs
 * in general. For example, you may want to add a method "speak()" that would
 * return "woof!". However, what method you add is up to you.
 * 
 * @param {Pug} pugObject
 * @returns {Pug}
 */
function addMethod(pugObject) {
    pugObject.speak = function() {
        return "woof!";
    }
}


/**
 * Given a Pug object, add a method that returns a list of its properties
 * in String form.
 * 
 * 
 * @param {Pug} pugObject 
 */
function listOutProperties(pugObject) {
    pugObject.listProperties = function() {
        let str = "";
        for(let prop in pugObject) {
            str += pugObject[prop];
        }
        return str;
    }
    return pugObject;
}

/**
 * Given a Pug object, add a method to it that finds its age in dog years.
 * Your dog's age in Dog Years is 7 times its age in regular years.
 * Return the object when you are done.
 * 
 * @param {Pug} pugObject 
 * @returns {Pug}
 */
function addFindDogYears(pugObject) {
    pugObject.findDogYears = function() {
        return pugObject.age * 7;
    }
    return pugObject;
}


/**
 * Given a Pug object, convert its values into an array
 * 
 * @param {Pug} pugObject 
 * @returns {String[]}
 */
function tryObjectValues(pugObject) {
    return Object.values(pugObject);
}

/**
 * Given a Pug object, convert one of its methods to a string,
 * then return that string.
 * 
 * @param {Pug} pugObject 
 * @returns {String}
 */
function functionToString(pugObject) {
    return JSON.stringify(pugObject.breathHeavy().toString())
}


