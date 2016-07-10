(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../package.json":2}],2:[function(require,module,exports){
module.exports={
  "name": "function.js",
  "version": "0.1.0",
  "description": "Functional programming just easier",
  "main": "lib/function.js",
  "scripts": {
    "build": "browserify lib/function.js -o build/function.js"
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
    "browserify": "^13.0.1"
  }
}

},{}]},{},[1]);
