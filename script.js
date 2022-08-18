
var counter = function(z){
    var result = 0;
    for (var i = 1; i <= z; i++){
        result = result + i;
    }


   return result;
}

console.log(counter(10));