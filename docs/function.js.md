<a name="fn"></a>

## fn
function.js namespace

**Kind**: global constant  
**Author:** Stefan Wimmer <stefanwimmer128@gmail.com>  

* [fn](#fn)
    * [.curry(func)](#fn.curry) ⇒ <code>function</code>
    * [.uncurry(curried)](#fn.uncurry) ⇒ <code>function</code>
    * [.bind(fn, args, thisArg)](#fn.bind) ⇒ <code>function</code>
    * [.map(func)](#fn.map) ⇒ <code>fn.CurriedMap</code>
    * [.filter(func)](#fn.filter) ⇒ <code>function</code>
    * [.find(func)](#fn.find) ⇒ <code>function</code>
    * [.reject(func)](#fn.reject) ⇒ <code>function</code>
    * [.reduce(func)](#fn.reduce) ⇒ <code>function</code>
    * [.version()](#fn.version) ⇒ <code>String</code>

<a name="fn.curry"></a>

### fn.curry(func) ⇒ <code>function</code>
Curries function

**Kind**: static method of <code>[fn](#fn)</code>  
**Returns**: <code>function</code> - Curried function  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Function to curry |

<a name="fn.uncurry"></a>

### fn.uncurry(curried) ⇒ <code>function</code>
Just the opposite of fn.curry

**Kind**: static method of <code>[fn](#fn)</code>  
**Returns**: <code>function</code> - Uncurried function  

| Param | Type | Description |
| --- | --- | --- |
| curried | <code>function</code> | Curried function to uncurry |

<a name="fn.bind"></a>

### fn.bind(fn, args, thisArg) ⇒ <code>function</code>
Binds function to custom "this" with arguments

**Kind**: static method of <code>[fn](#fn)</code>  
**Returns**: <code>function</code> - Bound function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to bind |
| args | <code>Array</code> | Arguments to bind |
| thisArg | <code>Object</code> | this to bind to |

<a name="fn.map"></a>

### fn.map(func) ⇒ <code>fn.CurriedMap</code>
Curried Array.prototype.map function

**Kind**: static method of <code>[fn](#fn)</code>  
**Returns**: <code>fn.CurriedMap</code> - Function that takes the Array to map  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Callback function |

<a name="fn.filter"></a>

### fn.filter(func) ⇒ <code>function</code>
Curried Array.prototype.filter function

**Kind**: static method of <code>[fn](#fn)</code>  
**Returns**: <code>function</code> - Function that takes the Array to filter  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Callback function |

<a name="fn.find"></a>

### fn.find(func) ⇒ <code>function</code>
Curried Array.prototype.find function

**Kind**: static method of <code>[fn](#fn)</code>  
**Returns**: <code>function</code> - Function that takes the Array to find  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Callback function |

<a name="fn.reject"></a>

### fn.reject(func) ⇒ <code>function</code>
Curried Array.prototype.reject function

**Kind**: static method of <code>[fn](#fn)</code>  
**Returns**: <code>function</code> - Function that takes the Array to reject  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Callback function |

<a name="fn.reduce"></a>

### fn.reduce(func) ⇒ <code>function</code>
Curried Array.prototype.reduce function

**Kind**: static method of <code>[fn](#fn)</code>  
**Returns**: <code>function</code> - Function that takes the Array to reduce  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Callback function |

<a name="fn.version"></a>

### fn.version() ⇒ <code>String</code>
function.js version

**Kind**: static method of <code>[fn](#fn)</code>  
**Returns**: <code>String</code> - function.js version  
