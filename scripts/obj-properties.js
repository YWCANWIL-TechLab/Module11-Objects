import {Pug} from './pug.js';
// * OBJECT PROPERTIES


/**
 * Given an object, add each of its properties to a string using a for/in loop,
 * then return the String.
 * 
 * Remember: You'll be using a variable, and objects have a special syntax for
 * that.
 * 
 * @param {Object} object 
 * @returns {String}
 */
function loopThroughProperties(object) {
    // TODO Finish the function
    let str = "";
    for(let property in object) {
        str += object[property];
    }
    return str;
}


/**
 * Given an object, add 3 properties to it. After you have added them to 
 * the object, return that object.
 * 
 * @param {Object} object 
 * @returns {Object}
 */
function addProperties(object) {
    object.color = "blue";
    object.weight = "250 lbs";
    object.age = 20;
    return object;
}


/**
 * Given a Pug object, remove a property of your choice.
 * Once you have removed a property, return that object.
 * 
 * @param {Pug} Pug - A Pug Object with a few properties. You can find out more about this object in pug.js
 * @returns {Pug}
 */
function removeProperties(pug) {
    // TODO Finish the function
    delete pug.ugly;
    return pug;
}


/**
 * Given a Pug object, return the attributes it has attached.
 * 
 * @param {Pug} Pug 
 * @returns {Pug}
 */
function getAttributes(object) {
    // TODO Finish the function
    return Object.getOwnPropertyDescriptors(object);
}


