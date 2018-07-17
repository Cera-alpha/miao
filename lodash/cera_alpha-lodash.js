var cera_alpha = {
  chunk : function(array, size=1) {
    var result = [];
    for (var i = 0; i < array.length; i += size) {
        result.push(array.slice(i, size + i));
    }
    return result;
  },
  compact : function(array) {
    var arr = []
    for (var i=0;i<array.length;i++) {
      if (Boolean(array[i])==true) {
        arr.push(array[i])
      }
    }
    return arr
  },
  concat : function (array,values) {
    for (var i=1;i<arguments.length;i++) {
      array.push(arguments[i])
    }
    return array
  },
  difference : function (array,values) {
    var map = {}
    var arr = []
    var min = Infinity
    var arg0 = {}
    for (var i=0;i<arguments[0].length;i++) {
      arg0[arguments[0][i]] = 1
    }
    for (var i=0;i<arguments.length;i++) {
      for (var j=0;j<arguments[i].length;j++) {
        if (arguments[i][j] in map == false) {
          map[arguments[i][j]] = 1
        } else {
          map[arguments[i][j]] += 1
        }
      }
    }
    for (var key in map) {
      if (key in arg0&&map[key]==1) {
        var temp = key
        arr.push(Number(temp))
      }
    }
    return arr
  },
  xdifferenceBy : function (array, [values], [iteratee=_.identity]) {
    var map = {}
    var arr = []
    var min = Infinity
    var arg0 = {}
    for (var i=0;i<arguments[0].length;i++) {
      arg0[[iteratee=_.identity](arguments[0][i])] = 1
    }
    for (var i=0;i<arguments.length;i++) {
      for (var j=0;j<arguments[i].length;j++) {
        if ([iteratee=_.identity](arguments[0][i]) in map == false) {
          map[[iteratee=_.identity](arguments[0][i])] = 1
        } else {
          map[[iteratee=_.identity](arguments[0][i])] += 1
        }
      }
    }
    for (var key in map) {
      if (key in arg0&&map[key]==1) {
        var temp = key
        arr.push(Number(temp))
      }
    }
    return arr
  },
  drop : function drop(array, n) {
    var arr
    if (n==null) {
      arr = array.slice(1,array.length) 
    } else if (n==0){      
      arr = array
    } else {
      arr = array.slice(n,n+1)
    }
    return arr
  },
  dropRight : function (array, n) {
    var arr = []
    if (n==null) {
      arr = array.slice(0,array.length-1) 
    } else if (n==0){      
      arr = array
    } else if (n<array.length&&n>0){
      arr = array.slice(0,arr.length-n)
    }
    return arr
  },
  fill : function(array, value, start, end) {
    if (!start) {
      start = 0
    }
    if (!end) {
      end = array.length
    }
    for (var i=start;i<end;i++) {
      array[i] = value     
    }
    return array
  },
  head : function (array) {
    return array[0]
  },
  flatten : function (array) {
    var arr =  [] 
    array.forEach(value => {
      if (Array.isArray(value)) {
        value.forEach(item => arr.push(item))
      } else {
        arr.push(value)
      }
    });
    return arr
  },
  flattenDeep : function (array) {
    var arr = []
    arrayElement(array)
    function arrayElement(array) {
      array.forEach(item => {
        if (Array.isArray(item)) 
          arrayElement(item)
        else 
          arr.push(item)   
      })
    }
    return arr
  },
  fromPairs : function (pairs) {
    var map = {}
    pairs.forEach(element => {map[element[0]]=element[1]})
    return map
  },
  indexOf : function(array, value, fromIndex) {
    if (!fromIndex) {
      fromIndex = 0
    }
    for (var i=fromIndex;i<array.length;i++) {
      if (array[i]==value) return i
    }
  },
  initial : function (array) {
    var arr = array.slice(0,array.length-1)
    return arr
  },
  intersection : function  ([arrays]) {
    var arr = []
    var map = {}
    var map0 = {}
    for (var i=0;i<arguments.length;i++) {
      for (var j=0;j<arguments.length;j++) {
        if (map[arguments[i][j]]==null) map[arguments[i][j]] = 1
        else map[arguments[i][j]] += 1
      }
    }
    arguments[0].forEach(element => {
      if (map0[element]==null) map0[element] = 1
      else map0[element] += 1
    })
    for (var key in map0) {
      if (key in map&&map[key]==arguments.length) {
        arr.push(Number(key))
      }
    } 
    return arr
  },
  intersectionBy : function (array, iteratee) {
    
  },
  join : function (array, separator) {
    var str = ''
    if (!separator) {
      separator = ','
    }
    for (var i=0;i<array.length;i++) {
      if (i==array.length-1) str += array[i]
      else str += array[i] + iteratee
    }
    return str
  },
  last : function(array) {
    return array[array.length-1]
  },
  lastIndexOf : function (array, value, fromIndex) {
    if (fromIndex==null) {
      fromIndex = array.length-1
    }
    for (var i=fromIndex;i>=0;i--) {
      if (array[i]==value) {
        return i
      }
    }
  },
  nth : function (array, n) {
    if (n==null) {
      n = 0
    } else if (n<0) {
      n = n+array.length
    }
    return array[n]
  },
  pull : function (array, values) {
    var arr = []
    var map = {}
    for (var i=1;i<arguments.length;i++) {
      map[arguments[i]] = 1
    }
    for (var i=0;i<array.length;i++) {
      if (array[i] in map == false) {
        array.splice(i,1)
        i=i-1
      }
    }
    return array
  },
  pullAll : function (array, values) {
    var arr = []
    var map = {}
    for (var i=1;i<values.length;i++) {
      map[values[i]] = 1
    }
    for (var i=0;i<array.length;i++) {
      if (array[i] in map == false) {
        array.splice(i,1)
        i=i-1
      }
    }
    return array
  },
  pullAllWith : function (array, values, comparator) {

  },
  pullAt : function (array, indexes) {
    var arr = []
    var temp = []
    var map = {}
    if (indexes==null) {
      return array
    } else {
      for (var i=0;i<indexes.length;i++) {
        arr.push(array.slice(indexes[i],indexes[i]+1))
      }
      for (var i=0;i<array.length;i++) {
        var flag = true
        for (var j=0;j<indexes.length;j++) {
          if (i==indexes[j]) {
            flag = false
          }
        }
        if (flag) temp.push(array[i])
      }
      array = temp
    }
    return arr
  },
  reverse : function (array)  {
    
  }
}
