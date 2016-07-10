/**
 * Created by Stefan Wimmer <stefanwimmer128@gmail.com> on 10.07.16.
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
 * @param _this {Object=null} this to bind to
 * @return {Function} Bound function
 */
fn.bind = (fn, args, _this = null) =>
    fn.bind(_this, ...args);

/**
 * @return {String} function.js version
 */
fn.version = () => require("../package.json").version;

module.exports = fn;
