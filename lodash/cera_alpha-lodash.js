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
        arr.push(temp)
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
        arr.push(temp)
      }
    }
    return arr
  },
  drop : function (array, n) {
    if (!n) {
      n = 0
    }
    var arr = array.slice(n,n+1) 
    return arr
  },
  dropRight : function (array, n) {
    var arr = []
    if (!n) {
      n= 0
    }
    if (n!==0) {
      arr = array.slice(0,n) 
    } else {
      arr = array
    }
    return arr
  },
  
}
