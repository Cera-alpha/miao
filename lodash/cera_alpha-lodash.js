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
  join : function (array, separator) {
    var str = ''
    if (!separator) {
      separator = ','
    }
    for (var i=0;i<array.length;i++) {
      if (i==array.length-1) str += array[i]
      else str += array[i] + ''+separator
    }
    return str
  },
  last : function(array) {
    return array[array.length-1]
  },
  lastIndexOf : function (array, value, fromIndex) {
    var flag  = true
    if (fromIndex==null) {
      fromIndex = array.length-1
    } else if (fromIndex<0) {
      fromIndex = fromIndex + array.length
      if (fromIndex<0) {
        return -1
      }
    }
    for (var i=fromIndex;i>=0;i--) {
      if (array[i]==value) {
        return i
        flag = true
      } else {
        flag = false
      }
    }
    if (!flag) {
      return -1
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
        arr.push(array.slice(i,i+1)[0])
      }
    }
    return arr
  },
  pullAll : function (array, values) {
    var arr = []
    var map = {}
    for (var i=0;i<values.length;i++) {
      map[values[i]] = 1
    }
    for (var i=0;i<array.length;i++) {
      if (array[i] in map == false) {
        arr.push(array.slice(i,i+1)[0])
      }
    }
    return arr
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
    for (var i=0;i<array.length/2;i++) {
      var temp = array[array.length-1-i]
      array[array.length-1-i] = array[i]
      array[i] =temp
    }
    return array
  },
  sortedIndex : function (array, value) {
    for (var i=0;i<array.length;i++) {
      if (value > array[i]) return i+1
      else if (value == array[i]) return i
    }
  },
  sortedLastIndexOf : function (array, value) {
    for (var i=array.length-1;i>=0;i--) {
      if (array[i]==value) {
        return i 
      }
    }
  },
  sortedUniq : function (array) {
    var num = array[0]
    var arr = [num]
    for (var i=0;i<array.length;i++) {
      if (array[i]!=num) {
        arr.push(array[i])
        num = array[i]
      }
    }
    return arr
  },
  sortedUniqBy : function (array, iteratee) {
    var num = array[0]
    var arr = [num]
    for (var i = 0; i < array.length; i++) {
      if (!iteratee) {
        if (array[i] != num) {
          arr.push(array[i])
          num = array[i]
        }
      }
      else {
        if (iteratee(array[i]) != iteratee(num)) {
          arr.push(array[i])
          num = array[i]
        }
      }
    }
    return arr
  },
  tail : function (array) {
    var arr = array.slice(1,array.length)
    return arr
  },
  take : function (array, n) {
    var arr = []
    if (n==null) n = 1
    else if (n<=0) return arr
    else if (n>array.length) n = array.length 
    arr = array.slice(0,n)
    return arr
  },
  takeRight : function (array, n) {
    var arr = []
    if (n==null) n = 1
    else if (n<=0) return arr
    else if (n>array.length) n = array.length 
    arr = array.slice(array.length-n,array.length)
    return arr
  },
}
