/**
 * Created by Stefan Wimmer <stefanwimmer128@gmail.com> on 10.07.16.
 */

/**
 * function.js namespace
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */
const fn = {};

/**
 * Curries function
 * @param func {Function} Function to curry
 * @return {Function} Curried function 
 */
fn.curry = (func) =>
    fn.bind(function curry(args, arg)
    {
        args = [ ...args, arg ];
        
        if (args.length < func.length)
            return fn.bind(curry, [ [ ...args ] ]);
        
        return func(...args);
    }, [ [] ]);

/**
 * Just the opposite of fn.curry
 * @param curried {Function} Curried function to uncurry
 * @return {Function} Uncurried function
 */
fn.uncurry = (curried) =>
    (...args) =>
    {
        let func = curried;
        
        while (typeof func === "function")
            func = func(args.shift());
        
        return func;
    };

/**
 * Binds function to custom "this" with arguments
 * @param fn {Function} Function to bind
 * @param [args] {Array} (Optional) Arguments to bind
 * @param [thisArg] {Object} (Optional) this to bind to
 * @return {Function} Bound function
 */
fn.bind = (fn, args, thisArg) =>
    fn.bind(thisArg, ...args);

/**
 * Composes functions
 * @param func {...Function} Functions to compose
 * @returns {Function} Composed function
 */
fn.compose = (...func) =>
    fn.bind(function compose(i, ...args)
    {
        return i === func.length
            ? func[0](...args)
            : compose(i + 1, func[i](...args));
    }, [ 0 ]);

fn.once = (func) =>
{
    let done = false;
    
    return (...args) => done ? undefined : (done = true, func(...args));
};

/**
 * Curried Array.prototype.map function
 * @param func {Function} Callback function
 * @return {Function} Function that takes the Array to map
 */
fn.map = func =>
    arr =>
        arr.map(func);

/**
 * Curried Array.prototype.filter function
 * @param func {Function} Callback function
 * @return {Function} Function that takes the Array to filter
 */
fn.filter = func =>
    arr =>
        arr.filter(func);

/**
 * Curried Array.prototype.find function
 * @param func {Function} Callback function
 * @return {Function} Function that takes the Array to find
 */
fn.find = func =>
    arr =>
        arr.find(func);

/**
 * Curried Array.prototype.findIndex function
 * @param func {Function} Callback function
 * @return {Function} Function that takes the Array to findIndex
 */
fn.findIndex = func =>
    arr =>
        arr.findIndex(func);

/**
 * Curried Array.prototype.reject function
 * @param func {Function} Callback function
 * @return {Function} Function that takes the Array to reject
 */
fn.reject = func =>
    arr =>
        arr.reject(func);

/**
 * Curried Array.prototype.reduce function
 * @param func {Function} Callback function
 * @return {Function} Function that takes the starting point and then the Array to reduce
 */
fn.reduce = func =>
    arr =>
        arr.reduce(func);

/**
 * pluck extracts a specific "key" from all objects within the array.
 * @param arr Array to pluck
 * @param [key] {String} (Optional) Key for extraction
 * @return {Array|Function} Returns array with all extracted values if all parameters are given, if not a function which takes the key argument is returned 
 */
fn.pluck = (arr, key) =>
{
    if (arr !== undefined && key !== undefined)
        return arr.map(x => x[key]);
    
    return fn.bind(fn.pluck, [ arr ]);
};

/**
 * Curried Array.prototype.forEach function
 * @param func {Function} Callback function
 * @return {Function} Function that takes the Array to forEach
 */
fn.each = func =>
    arr =>
        arr.forEach(func);

/**
 * Curried Array.prototype.every function
 * @param func {Function} Callback function
 * @return {Function} Function that takes the Array to every
 */
fn.every = func =>
    arr =>
        arr.every(func);

/**
 * Curried Array.prototype.some function
 * @param func {Function} Callback function
 * @return {Function} Function that takes the Array to some
 */
fn.some = func =>
    arr =>
        arr.some(func);

/**
 * Calculate sum of all numbers in the Array
 * @param arr {Array} Array to calculate sum of
 * @return {Number} Calculated sum
 */
fn.sum = (arr) =>
    arr.reduce((sum, x) => sum + x, 0);

/**
 * function.js version
 * @return {String} function.js version
 */
fn.version = () => require("../package.json").version;

module.exports = fn;
