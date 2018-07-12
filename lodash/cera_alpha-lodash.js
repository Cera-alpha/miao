var cera_alpha = {
  chunk: function(array, size = 1) {
    var result = [];
    for (var i = 0; i < array.length; i += size) {
        result.push(array.slice(i, size + i));
    }
    return result;
    }
}
