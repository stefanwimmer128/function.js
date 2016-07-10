(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
 * pluck extracts a specific "key" from all objects within the array.
 * @param arr Array to pluck
 * @param [key] {String}
 * @return {Array|Function} Returns array with all extracted values if all parameters are given, if not a function which takes the key argument is returned 
 */
fn.pluck = (arr, key) =>
{
    if (arr !== undefined && key !== undefined)
        return arr.map(x => x[key]);
    
    return fn.bind(fn.pluck, [ arr ]);
};

/**
 * function.js version
 * @return {String} function.js version
 */
fn.version = () => require("../package.json").version;

module.exports = fn;

},{"../package.json":2}],2:[function(require,module,exports){
module.exports={
  "name": "function.js",
  "version": "1.0.0",
  "description": "Functional programming just easier",
  "main": "lib/function.js",
  "scripts": {
    "build": "browserify lib/function.js -o build/function.js; jsdoc2md lib/function.js > docs/fn.md"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/stefanwimmer128/function.js.git"
  },
  "keywords": [
    "function.js",
    "fn.js",
    "function",
    "functional",
    "programming"
  ],
  "author": "Stefan Wimmer <stefanwimmer128@gmail.com>",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/stefanwimmer128/function.js/issues"
  },
  "homepage": "https://github.com/stefanwimmer128/function.js#readme",
  "devDependencies": {
    "browserify": "^13.0.1",
    "jsdoc-to-markdown": "^1.3.6"
  }
}

},{}]},{},[1]);
