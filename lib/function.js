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
 * @param args {Array} Arguments to bind
 * @param thisArg {Object} this to bind to
 * @return {Function} Bound function
 */
fn.bind = (fn, args, thisArg = null) =>
    fn.bind(thisArg, ...args);

/**
 * Curried Array.prototype.map function
 * @param func {Function} Callback function
 * @return {fn.CurriedMap} Function that takes the Array to map
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
 * @return {Function} Function that takes the Array to reduce
 */
fn.reduce = func =>
    arr =>
        arr.reduce(func);

/**
 * function.js version
 * @return {String} function.js version
 */
fn.version = () => require("../package.json").version;

module.exports = fn;
