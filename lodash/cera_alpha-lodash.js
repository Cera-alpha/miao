var cera_alpha = {
  chunk: function(array, size = 1) {
    var result = [];
    for (var i = 0; i < array.length; i += size) {
      result.push(array.slice(i, size + i));
    }
    return result;
  },
  compact: function(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
      if (Boolean(array[i]) == true) {
        arr.push(array[i]);
      }
    }
    return arr;
  },
  concat: function(array, values) {
    for (var i = 1; i < arguments.length; i++) {
      array.concat(arguments[i]);
    }
    return array;
  },
  difference: function(array, values) {
    var map = {};
    var arr = [];
    var min = Infinity;
    var arg0 = {};
    for (var i = 0; i < arguments[0].length; i++) {
      arg0[arguments[0][i]] = 1;
    }
    for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
        if (arguments[i][j] in map == false) {
          map[arguments[i][j]] = 1;
        } else {
          map[arguments[i][j]] += 1;
        }
      }
    }
    for (var key in map) {
      if (key in arg0 && map[key] == 1) {
        var temp = key;
        arr.push(Number(temp));
      }
    }
    return arr;
  },
  drop: function drop(array, n) {
    var arr;
    if (n == null) {
      arr = array.slice(1, array.length);
    } else if (n == 0) {
      arr = array;
    } else {
      arr = array.slice(n, n + 1);
    }
    return arr;
  },
  dropRight: function(array, n) {
    var arr = [];
    if (n == null) {
      arr = array.slice(0, array.length - 1);
    } else if (n == 0) {
      arr = array;
    } else if (n < array.length && n > 0) {
      arr = array.slice(0, arr.length - n);
    }
    return arr;
  },
  fill: function(array, value, start, end) {
    if (!start) {
      start = 0;
    }
    if (!end) {
      end = array.length;
    }
    for (var i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  },
  head: function(array) {
    return array[0];
  },
  flatten: function(array) {
    var arr = [];
    array.forEach(value => {
      if (Array.isArray(value)) {
        value.forEach(item => arr.push(item));
      } else {
        arr.push(value);
      }
    });
    return arr;
  },
  flattenDeep: function(array) {
    var arr = [];
    arrayElement(array);
    function arrayElement(array) {
      array.forEach(item => {
        if (Array.isArray(item)) arrayElement(item);
        else arr.push(item);
      });
    }
    return arr;
  },
  fromPairs: function(pairs) {
    var map = {};
    pairs.forEach(element => {
      map[element[0]] = element[1];
    });
    return map;
  },
  indexOf: function(array, value, fromIndex) {
    if (!fromIndex) {
      fromIndex = 0;
    }
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) return i;
    }
  },
  initial: function(array) {
    var arr = array.slice(0, array.length - 1);
    return arr;
  },
  intersection: function([arrays]) {
    var arr = [];
    var map = {};
    var map0 = {};
    for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments.length; j++) {
        if (map[arguments[i][j]] == null) map[arguments[i][j]] = 1;
        else map[arguments[i][j]] += 1;
      }
    }
    arguments[0].forEach(element => {
      if (map0[element] == null) map0[element] = 1;
      else map0[element] += 1;
    });
    for (var key in map0) {
      if (key in map && map[key] == arguments.length) {
        arr.push(Number(key));
      }
    }
    return arr;
  },
  join: function(array, separator) {
    var str = "";
    if (!separator) {
      separator = ",";
    }
    for (var i = 0; i < array.length; i++) {
      if (i == array.length - 1) str += array[i];
      else str += array[i] + "" + separator;
    }
    return str;
  },
  last: function(array) {
    return array[array.length - 1];
  },
  lastIndexOf: function(array, value, fromIndex) {
    var flag = true;
    if (fromIndex == null) {
      fromIndex = array.length - 1;
    } else if (fromIndex < 0) {
      fromIndex = fromIndex + array.length;
      if (fromIndex < 0) {
        return -1;
      }
    }
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i;
        flag = true;
      } else {
        flag = false;
      }
    }
    if (!flag) {
      return -1;
    }
  },
  nth: function(array, n) {
    if (n == null) {
      n = 0;
    } else if (n < 0) {
      n = n + array.length;
    }
    return array[n];
  },
  pull: function(array, values) {
    var arr = [];
    var map = {};
    for (var i = 1; i < arguments.length; i++) {
      map[arguments[i]] = 1;
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i] in map == false) {
        arr.push(array.slice(i, i + 1)[0]);
      }
    }
    return arr;
  },
  pullAll: function(array, values) {
    var arr = [];
    var map = {};
    for (var i = 0; i < values.length; i++) {
      map[values[i]] = 1;
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i] in map == false) {
        arr.push(array.slice(i, i + 1)[0]);
      }
    }
    return arr;
  },
  pullAt: function(array, indexes) {
    var arr = [];
    var temp = [];
    var map = {};
    if (indexes == null) {
      return array;
    } else {
      for (var i = 0; i < indexes.length; i++) {
        arr.push(array.slice(indexes[i], indexes[i] + 1));
      }
      for (var i = 0; i < array.length; i++) {
        var flag = true;
        for (var j = 0; j < indexes.length; j++) {
          if (i == indexes[j]) {
            flag = false;
          }
        }
        if (flag) temp.push(array[i]);
      }
      array = temp;
    }
    return arr;
  },
  reverse: function(array) {
    for (var i = 0; i < array.length / 2; i++) {
      var temp = array[array.length - 1 - i];
      array[array.length - 1 - i] = array[i];
      array[i] = temp;
    }
    return array;
  },
  sortedIndex: function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (value > array[i]) return i + 1;
      else if (value == array[i]) return i;
    }
  },
  sortedLastIndexOf: function(array, value) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i] == value) {
        return i;
      }
    }
  },
  sortedUniq: function(array) {
    var num = array[0];
    var arr = [num];
    for (var i = 0; i < array.length; i++) {
      if (array[i] != num) {
        arr.push(array[i]);
        num = array[i];
      }
    }
    return arr;
  },
  sortedUniqBy: function(array, iteratee) {
    if (!iteratee) iteratee = it => it;
    else iteratee = cera_alpha.iteratee(iteratee);
    var num = array[0];
    var arr = [num];
    for (var i = 0; i < array.length; i++) {
      if (iteratee(array[i]) != iteratee(num)) {
        arr.push(array[i]);
        num = array[i];
      }
    }
    return arr;
  },
  tail: function(array) {
    var arr = array.slice(1, array.length);
    return arr;
  },
  take: function(array, n) {
    var arr = [];
    if (n == null) n = 1;
    else if (n <= 0) return arr;
    else if (n > array.length) n = array.length;
    arr = array.slice(0, n);
    return arr;
  },
  takeRight: function(array, n) {
    var arr = [];
    if (n == null) n = 1;
    else if (n <= 0) return arr;
    else if (n > array.length) n = array.length;
    arr = array.slice(array.length - n, array.length);
    return arr;
  },
  union: function(arrays) {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
        if (arr.indexOf(arguments[i][j]) == -1) arr.push(arguments[i][j]);
      }
    }
    return arr;
  },
  uniq: function(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
      if (arr.indexOf(array[i] == -1)) arr.push(array[i]);
    }
    return arr;
  },
  identity: function(value) {
    return arguments[0];
  },
  property: function(path) {
    return function(obj) {
      return obj[path];
    };
  },
  iteratee: function(func) {
    if (typeof func === "string") {
      return cera_alpha.property(func);
    } else if (Object.prototype.toString.call(func) === "[object Object]") {
      return cera_alpha.matches(func);
    } else if (Array.isArray(func)) {
      return cera_alpha.matchesProperty(func[0], func[1]);
    } else if (Object.prototype.toString.call(func) === "[object Function]") {
      return func;
    } else if (func === undefined) return it => it;
  },
  matches: function(source) {
    return function(obj) {
      for (var key in source) {
        if (key in obj == false || obj[key] !== source[key]) {
          return false;
        }
      }
      return true;
    };
  },
  matchesProperty: function(path, srcValue) {
    return function(obj) {
      if (obj[path] === srcValue) {
        return true;
      } else {
        return false;
      }
    };
  },
  differenceBy: function(array, ...args) {
    var arr = [];
    var result = [];
    var len = arguments.length - 1;
    if (
      typeof arguments[len] === "string" ||
      typeof arguments[len] === "function"
    ) {
      var iteratee = cera_alpha.iteratee(arguments[len]);
      len--;
    } else {
      var iteratee = cera_alpha.identity;
    }
    for (var i = 1; i <= len; i++) {
      arr.push(
        arguments[i].map(element => {
          var temp = element;
          return iteratee(temp);
        })
      );
    }
    for (var i = 0; i < array.length; i++) {
      var flag = true;
      for (var j = 0; j < arr.length; j++) {
        if (arr[j].includes(iteratee(array[i])) === false) {
          flag = false;
        }
      }
      if (!flag) result.push(array[i]);
    }
    return result;
  },
  stringify: function(arg) {
    function basicValue(value) {
      if (
        Object.prototype.toString.call(value) === "[object Number]" ||
        Object.prototype.toString.call(value) === "[object Boolean]"
      ) {
        return value + "";
      } else if (Object.prototype.toString.call(value) === "[object String]") {
        return '"' + value + '"';
      } else {
        return false;
      }
    }
    var res;
    if ((res = basicValue(arg))) return res;
    else {
      res = "";
      res += justify(arg);
    }
    function justify(obj) {
      if (Object.prototype.toString.call(obj) === "[object Array]") {
        var temp = "[";
        var add;
        for (var i = 0; i < obj.length; i++) {
          if ((add = basicValue(obj[i]))) temp += add;
          else if ((add = justify(obj[i]))) {
            temp += add;
          }
          if (i != obj.length - 1) temp += ",";
        }
        temp += "]";
        return temp;
      } else if (Object.prototype.toString.call(obj) === "[object Object]") {
        var temp = "{";
        var add;
        for (var key in obj) {
          temp += basicValue(key) + ":";
          if ((add = basicValue(obj[key]))) temp += add;
          else if ((add = justify(obj[key]))) temp += add;
          temp += ",";
        }
        temp = temp.substr(0, temp.length - 1);
        temp += "}";
      } else return false;
      return temp;
    }
    return res;
  },
  isEqualWith: function(value, other, customizer) {
    if (value === other) {
      return true;
    }
    if (
      Object.prototype.toString.call(value) !==
      Object.prototype.toString.call(other)
    ) {
      return false;
    }
    if (
      Object.prototype.toString.call(value) === "[object Array]" ||
      Object.prototype.toString.call(value) === "[object Set]"
    ) {
      var alen = value.size || value.length;
      var blen = other.size || other.length;
      if (alen === blen) {
        for (var i = 0; i < alen; i++) {
          if (customizer(value[i]) !== customizer(other[i])) return false;
        }
        return true;
      } else return false;
    }
    if (
      Object.prototype.toString.call(value) === "[object Object]" ||
      Object.prototype.toString.call(value) === "[object Map]"
    ) {
      for (var key in value) {
        if (key in other === false) return false;
        else if (customizer(value[key]) !== customizer(other[key])) {
          return false;
        }
      }
      return true;
    }
    return value === other;
  },
  isEqual: function(value, other) {
    return isEqualWith(value, other, it => it);
  },
  isArguments: function(value) {
    return Object.prototype.toString.call(value) === "[object Arguments]";
  },
  isArray: function(value) {
    return Object.prototype.toString.call(value) === "[object Array]";
  },
  isArrayBuffer: function(value) {
    return Object.prototype.toString.call(value) === "[object ArrayBuffer]";
  },
  isArrayLike: function(value) {
    if (Object.prototype.toString.call(value) !== "[object Function]") {
      if (value.length >= 0) return true;
    }
    return false;
  },
  isArrayLikeObject: function(value) {
    if (Object.prototype.toString.call(value) !== "[object Function]") {
      if (value.length >= 0) {
        if (Object.prototype.toString.call(value) !== "[object Object]")
          return true;
      }
    }
    return false;
  },
  isBoolean: function(value) {
    return Object.prototype.toString.call(value) === "[object Boolean]";
  },
  isDate: function(value) {
    return Object.prototype.toString.call(value) === "[object Date]";
  },
  isElement: function(value) {
    return value !== null && value.nodeType === 1;
  },
  isEmpty: function(val) {
    if (Object.prototype.toString.call(val) === "[object Object]") {
      if (Object.keys(val).length !== 0) return false;
    }
    if (
      Object.prototype.toString.call(val) === "[object Set]" ||
      Object.prototype.toString.call(val) === "[object Map]"
    ) {
      if (val.size !== 0) return false;
    }
    if (
      Object.prototype.toString.call(val) === "[object Arguments]" ||
      Object.prototype.toString.call(val) === "[object Array]" ||
      Object.prototype.toString.call(val) === "[object Buffer]" ||
      Object.prototype.toString.call(val) === "[object String]"
    ) {
      if (val.length !== 0) return false;
    }
    return true;
  },
  isError: function(value) {
    return Object.prototype.toString.call(value) === "[object Error]";
  },
  isFinite: function(value) {
    if (Object.prototype.toString.call(value) === "[object Number]") {
      if (Number.isFinite(value)) return true;
    }
    return false;
  },
  isFunction: function(value) {
    return Object.prototype.toString.call(value) === "[object Function]";
  },
  isInteger: function(value) {
    return Number.isInteger(value);
  },
  isLength: function(value) {
    if (cera_alpha.isInteger(value) && value >= 0 && value <= 2 ** 31)
      return true;
    return false;
  },
  isFunction: function(value) {
    return Object.prototype.toString.call(value) === "[object Map]";
  },
  isMatch: function(object, source) {
    return isMatchWith(object, source);
  },
  isMatchWith: function(object, source, customizer = it => it) {
    var flag = false;
    if (
      Object.prototype.toString.call(object) === "[object Object]" &&
      Object.prototype.toString.call(source) === "[object Object]"
    ) {
      compare(object, source);
      return flag;
    }
    function compare(one, other) {
      for (var key in one) {
        if (Object.prototype.toString.call(one[key]) !== "[object Object]") {
          if (key in other) {
            if (customizer(one[key]) === customizer(other[key])) {
              flag = true;
              return;
            }
          }
        } else {
          if (Object.prototype.toString.call(one[key]) !== "[object Object]") {
            return;
          } else {
            compare(one[key], other[key]);
          }
        }
      }
    }
  },
  isNaN: function(val) {
    if (Object.prototype.toString.call(val) === "[object Number]") {
      return Number.isNaN(Number(val));
    }
    return false;
  },
  isNative: function(val) {
    return val.toString().includes("[native code]");
  },
  isNil: function(val) {
    return val === null || val === undefined;
  },
  isNull: function(val) {
    return val === null;
  },
  isNumber: function(val) {
    return cera_alpha.isFinite(val);
  },
  isObject: function(val) {
    return (
      value !== null &&
      (typeof value === "object" || typeof value === "function")
    );
  },
  isObjectLike: function(val) {
    return value !== null && typeof value === "object";
  },
  isPlainObject: function(val) {
    return (
      value.__proto__ === Object.prototype || value.__proto__ === undefined
    );
  },
  isRegExp: function(val) {
    return Object.prototype.toString.call(val) === "[object RegExp]";
  },
  isSafeInteger: function(val) {
    return (
      isInteger(val) &&
      (val >= Number.MIN_SAFE_INTEGER && val <= Number.MAX_SAFE_INTEGER)
    );
  },
  isSet: function(val) {
    return Object.prototype.toString.call(val) === "[object Set]";
  },
  isString: function(vaL) {
    return Object.prototype.toString.call(val) === "[object String]";
  },
  isSymbol: function(val) {
    return Object.prototype.toString.call(val) === "[object Symbol]";
  },
  isTypedArray: function(val) {
    return /\[object Uint(8|16|32)Array\]/.test(
      Object.prototype.toString.call(val)
    );
  },
  isUndefined: function(val) {
    return Object.prototype.toString.call(val) === "[object Undefined]";
  },
  isWeakMap: function(val) {
    return Object.prototype.toString.call(val) === "[object WeakMap]";
  },
  isWeakSet: function(val) {
    return Object.prototype.toString.call(val) === "[object WeakSet]";
  },
  lt: function(value, other) {
    return value < other;
  },
  lte: function(value, other) {
    return value <= other;
  },
  toArray: function(val) {
    if (Object.prototype.toString.call(val) === "[object Object]") {
      return Object.values(val);
    } else if (Object.prototype.toString.call(val) === "[object String]") {
      return val.split("");
    } else return [];
  },
  toNumber: function(val) {
    return Number(val);
  },
  toFinite: function(val) {
    if (val === Infinity) return Number.MAX_VALUE;
    if (val === -Infinity) return Number.MIN_VALUE;
    var res = Number(val);
    return res;
  },
  toInteger: function(val) {
    if (val === -Infinity || val === Number.MIN_VALUE) return 0;
    else if (val === Infinity) return Number.MAX_VALUE;
    var res = parseInt(val);
  },
  toLength: function(val) {
    if (val === -Infinity || val < 0) return 0;
    else if (val === Infinity || val > 2 ** 32 - 1) return 2 ** 32 - 1;
    var res = parseInt(val);
    if (res < 0) res = 0;
    if (res > 2 ** 32 - 1) res = 2 ** 32 - 1;
    return res;
  },
  toSafeInteger: function(val) {
    if (val === Number.MIN_VALUE) return 0;
    var res = parseInt(Number(val));
    if (res < Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;
    if (res > Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
  },
  assign: function(object, sources) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (arguments.hasOwnProperty(key)) {
          object[key] = arguments[i][key];
        }
      }
    }
    return object;
  },
  add: function(augend, addend) {
    return augend + addend;
  },
  ceil: function(number, precision = 0) {
    var dig = Math.abs(precision);
    if (precision >= 0)
      return +(Math.ceil(number * 10 ** dig) / 10 ** dig).toFixed(dig);
    if (precision < 0) {
      return +(Math.ceil(number / 10 ** dig) * 10 ** dig).toFixed(dig);
    }
  },
  divide: function(dividend, divisor) {
    return dividend / divisor;
  },
  floor: function(number, precision = 0) {
    var dig = Math.abs(precision);
    if (precision >= 0)
      return +(Math.floor(number * 10 ** dig) / 10 ** dig).toFixed(dig);
    if (precision < 0) {
      return +(Math.floor(number / 10 ** dig) * 10 ** dig).toFixed(dig);
    }
  },
  max: function(array) {
    return maxBy(array, it => it);
  },
  maxBy: function(array, iteratee) {
    iteratee = cera_alpha.iteratee(iteratee);
    var max = -Infinity;
    array.forEach(function(val) {
      max =
        Math.max(max, iteratee(val)) === NaN
          ? undefined
          : Math.max(max, iteratee(val));
    });
    return max;
  },
  mean: function(array) {
    return meanBy(array, it => it);
  },
  meanBy: function(array, iteratee) {
    iteratee = cera_alpha.iteratee(iteratee);
    return array.reduce(function(sum, val, idx, it) {
      if (idx === it.length - 1) return (sum + iteratee(val)) / (idx + 1);
      return (sum += iteratee(val));
    }, 0);
  },
  min: function(array) {
    return minBy(array, it => it);
  },
  minBy: function(array, iteratee) {
    iteratee = cera_alpha.iteratee(iteratee);
    var min = -Infinity;
    array.forEach(function(val) {
      min =
        Math.min(max, iteratee(val)) === NaN
          ? undefined
          : Math.min(max, iteratee(val));
    });
    return max;
  },
  multiply: function(multiplier, multiplicand) {
    return multiplier * multiplicand;
  },
  round: function(number, precision = 0) {
    var dig = Math.abs(precision);
    if (precision >= 0)
      return +(Math.round(number * 10 ** dig) / 10 ** dig).toFixed(dig);
    if (precision < 0) {
      return +(Math.round(number / 10 ** dig) * 10 ** dig).toFixed(dig);
    }
  },
  subtract: function(minuend, subtrahend) {
    return minuend - subtrahend;
  },
  sum: function(array) {
    return sumBy(array, it => it);
  },
  sumBy: function(array, iteratee) {
    iteratee = cera_alpha.iteratee(iteratee);
    return array.reduce(function(sum, val, idx, it) {
      return (sum += iteratee(val));
    }, 0);
  },
  clamp: function(number, lower, upper) {
    if (number < lower) return lower;
    else if (number > upper) return upper;
    else return number;
  },
  inRange: function(number, start = 0, end) {
    if (start > end) {
      var temp = start;
      start = end;
      end = temp;
    }
    return number > start && number < end;
  },
  random: function(...args) {
    var num = 0,
      flag = false;
    for (var i = 0; i < args.length; i++) {
      if (args[i] === true || !Number.isInteger(args[i])) {
        flag = true;
      }
      if (cera_alpha.isNumber(args[i])) num++;
    }
    if (num === 0) {
      lower = 0;
      upper = 1;
    } else if (num === 1) {
      lower = 0;
      upper = args[0];
    } else if (num === 2) {
      lower = args[0];
      upper = args[1];
    }
    if (flag) return Math.random() * (upper - lower) + lower;
    else return Math.round(Math.random() * (upper - lower)) + lower;
  },
  assignIn: function(object, ...sources) {
    for (var i = 1; i < sources.length; i++) {
      for (var key in sources[i]) {
        object[key] = sources[i][key];
      }
    }
    return object;
  },
  at: function(object, paths) {
    var res = [];
    for (var key of paths) {
      res.push(cera_alpha.get(object, key));
    }
    return res;
  },
  get: function(object, path, defaultValue = undefined) {
    var val = object;
    if (path instanceof Array === false) path = cera_alpha.toPath(path);
    for (var key of path) {
      val = val[key];
      if (val === undefined) return defaultValue;
    }
    return val;
  },
  toPath: function(value) {
    if (Array.isArray(value)) return value;
    else return value.match(/[^\.\[\]\'\"]+/g);
  },
  defaults: function(object, ...sources) {
    for (var val of sources) {
      for (var key in val) {
        if (!(key in object)) {
          object[key] = val[key];
        }
      }
    }
    return object;
  },
  defaultsDeep: function(object, ...sources) {
    for (var val of sources) {
      findPro(object, val);
    }
    function findPro(obj, other) {
      for (var key in other) {
        if (other[key] instanceof Object) {
          if (!obj[key]) obj[key] = {};
          findPro(obj[key], other[key]);
        }
        if (!(key in obj)) obj[key] = other[key];
      }
    }
    return object;
  },
  find: function(collection, predicate, fromIndex = 0) {
    if (!predicate) predicate = cera_alpha.identity(predicate);
    else predicate = cera_alpha.iteratee(predicate);
    for (var i = fromIndex; i < collection.length - 1; i++) {
      if (predicate(collection[i])) return collection[i];
    }
  },
  findKey: function(object, predicate) {
    predicate = cera_alpha.iteratee(predicate);
    for (var key in object) {
      if (predicate(object[key])) {
        return key;
      }
    }
  },
  findLastKey: function(object, predicate) {
    predicate = cera_alpha.iteratee(predicate);
    obj = Object.keys(object);
    for (var i = obj.length - 1; i >= 0; i--)
      if (predicate(object[obj[i]])) {
        return obj[i];
      }
  },
  forIn: function(object, iteratee) {
    iteratee = cera_alpha.iteratee(iteratee);
    for (var key in object) {
      var res = iteratee(object[key], key, object);
      if (res === false) break;
    }
  },
  forInRight: function(object, iteratee) {
    iteratee = cera_alpha.iteratee(iteratee);
    var obj = Object.keys(object);
    for (var i = obj.length - 1; i >= 0; i--) {
      var res = iteratee(object[obj[i]], obj[i], object);
      if (res === false) break;
    }
  },
  forOwn: function(object, iteratee) {
    iteratee = cera_alpha.iteratee(iteratee);
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        var res = iteratee(object[key], key, object);
        if (res === false) break;
      }
    }
  },
  forOwnRight: function(object, iteratee) {
    iteratee = cera_alpha.iteratee(iteratee);
    var obj = Object.keys(object);
    for (var i = obj.length - 1; i >= 0; i--) {
      res = iteratee(object[obj[i]], obj[i], object);
      if (res === false) break;
    }
  },
  functions: function(object) {
    return Object.keys(object);
  },
  functionsIn: function(object) {
    var res = [];
    for (var key in object) {
      res.push(key);
    }
    return res;
  },
  has: function(object, path) {
    var obj = object;
    path = cera_alpha.toPath(path);
    for (var key of path) {
      if (!obj.hasOwnProperty(key)) return false;
      obj = obj[key];
    }
    return obj === undefined ? false : obj;
  },
  defaultTo: function(value, defaultValue) {
    if (value === NaN || value === undefined || value === null)
      return defaultValue;
    else return value;
  },
  hasIn: function(object, path) {
    return Boolean(get(object, path));
  },
  invert: function(object) {
    var obj = {};
    for (var key in object) {
      obj[object[key]] = key;
    }
    return obj;
  },
  invertBy: function(object, iteratee) {
    iteratee = cera_alpha.iteratee(iteratee);
    var obj = {};
    for (var key in object) {
      name = iteratee(object[key]);
      if (!obj[name]) obj[name] = [];
      obj[name].push(key);
    }
    return obj;
  },
  invoke: function(object, path, ...args) {
    var get_path = cera_alpha.toPath(path);
    var f = get_path.pop();
    return cera_alpha.get(object, get_path)[f](...args);
  },
  keys: function(object) {
    if (object instanceof Object === false) object = Object(object);
    return cera_alpha.functions(object);
  },
  keysIn: function(object) {
    if (object instanceof Object === false) object = Object(object);
    return cera_alpha.functionsIn(object);
  },
  mapKeys: function(object, iteratee) {
    iteratee = cera_alpha.iteratee(iteratee);
    var obj = {};
    for (var key in object) {
      obj[iteratee(object[key], key, object)] = object[key];
    }
    return obj;
  },
  mapValues: function(object, iteratee) {
    iteratee = cera_alpha.iteratee(iteratee);
    var obj = {};
    for (var key in object) {
      obj[key] = iteratee(object[key], key, object);
    }
    return obj;
  },
  mergeWith: function(object, sources, customizer) {
    deepPaste(object, sources);
    return object;
    function deepPaste(t, o) {
      for (var key in o) {
        var val = customizer(t[key], o[key], t, o);
        if (val !== undefined) t[key] = val;
        else if (typeof o[key] === "object") {
          if (t[key] === undefined) t[key] = new o[key].constructor();
          deepPaste(t[key], o[key]);
        } else t[key] = o[key];
      }
    }
  },
  merge: function(object, sources) {
    return cera_alpha.mergeWith(object, sources, () => undefined);
  },
  omitBy: function(object, predicate = it => it) {
    var obj = {};
    for (var key in object) {
      if (predicate(object[key], key) == true) obj[key] = object[key];
    }
    return obj;
  },
  omit: function(object, ...props) {
    var obj = {};
    for (var key in object) {
      var flag = false;
      for (var i = 0; i < props.length; i++) {
        if (props[i] === key) {
          flag = true;
          break;
        }
      }
      if (!flag) obj[key] = object[key];
    }
    return obj;
  },
  pick: function(object, ...props) {
    var obj = {};
    var keys = Object.keys(object).filter(it => props[0].includes(it));
    for (var key of keys) {
      obj[key] = object[key];
    }
    return obj;
  },
  pickBy: function(object, predicate = it => it) {
    var obj = {};
    var keys = Object.keys(object).filter(it => predicate(object[it]));
    for (var key of keys) {
      obj[key] = object[key];
    }
    return obj;
  },
  result: function(object, path, defaultValue) {
    var res = get(object, path, defaultValue);
    if (typeof res === "function") {
      return res.call(object);
    }
    return res;
  },
  set: function(object, path, value) {
    return updateWith(object, path, value);
  },
  updateWith: function(object, path, updater, customizer) {
    var obj = object;
    var name, preobj;
    path = cera_alpha.toPath(path);
    for (var key of path) {
      if (obj[key] === undefined) {
        if (!customizer) {
          if (Number(key) === NaN) obj[key] = {};
          else obj[key] = [];
        } else {
          obj[key] = customizer();
        }
      }
      preobj = obj;
      obj = obj[key];
      name = key;
    }
    if (typeof updater === "function") preobj[name] = updater(obj);
    else preobj[name] = updater;
    return object;
  },
  setWith: function(object, path, value, customizer) {
    return updateWith(object, path, value, customizer);
  },
  update: function(object, path, updater) {
    return updateWith(object, path, updater);
  },
  toPairs: function(object) {
    var res = [];
    cera_alpha.forOwn(object, function(value, key) {
      var valkey = [];
      valkey.push(key, value);
      res.push(valkey);
    });
    return res;
  },
  toPairsIn: function(object) {
    var res = [];
    cera_alpha.forIn(object, function(value, key) {
      var valkey = [];
      valkey.push(key, value);
      res.push(valkey);
    });
    return res;
  },
  transform: function(object, iteratee, accumulator) {
    for (var key in object) {
      var flag = iteratee(accumulator, object[key], key, object);
      if (flag === false) return accumulator;
    }
    return accumulator;
  },
  unset: function(object, path) {
    var obj = object;
    path = cera_alpha.toPath(path);
    for (var key of path) {
      preobj = obj;
      obj = obj[key];
      name = key;
    }
    delete preobj[name];
  },
  values: function(object) {
    object = Object(object);
    var res = [];
    for (var key of object) {
      if (object.hasOwnProperty(key)) {
        res.push(key);
      }
    }
    return key;
  },
  valuesIn: function(object) {
    object = Object(object);
    var res = [];
    for (var key of object) {
      res.push(key);
    }
    return key;
  },
  camelCase: function(string = "") {
    var match = string.match(/[a-zA-Z]+/g);
    var str = match[1].toLowerCase().split("");
    str[0] = str[0].toUpperCase();
    str = str.join("");
    match[0] = match[0].toLowerCase();
    match[1] = str;
    return match.join("");
  },
  capitalize: function(string = "") {
    var str = string.toLowerCase().split("");
    str[0] = str[0].toUpperCase();
    return str.join("");
  },
  endsWith: function(string = "", target, position = string.length) {
    return string[position - 1] === target;
  },
  escapeRegExp: function(string = "") {
    return string.replace(/[\^$.*?\(\)\[\]{}\| ]/g, "\\$1");
  },
  escape: function(string = "") {
    return string.replace(/[&<>"']/g, s => {
      switch (s) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&#x27;";
      }
    });
  },
  kebabCase : function(string='') {
    return string.match(/[a-z]+|[A-Za-z]+/g).join('-').toLowerCase()
  },
  lowerCase : function([string='']) {
    return string.match(/[a-z]+|[A-Za-z]+/g).join(' ').toLowerCase()
  },
  lowerFirst  : function(string='') {
    var str = string.split("");
    str[0] = str[0].toLowerCase();
    return str.join("");
  },
};
