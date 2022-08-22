var days = function(choice) {
    var weeksdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
     
    return  weeksdays[choice - 1];
}


var days2 = function() {
    var weeksdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var choice = window.prompt("What day of the week is it?");
    
    // console.log(choice);
    // console.log( weeksdays[choice - 1]);
    window.alert(choice + "\n" + weeksdays[choice - 1])
}


console.log(days(1));
console.log(days(5));
console.log(days(8));