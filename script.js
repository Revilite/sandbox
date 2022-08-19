var vowel = function(){
    var vowels = ["a", "e", "i", "o", "u"];
    var word = "you are great!";
    word = word.toLowerCase();
    var counter = 0;
    for (var i = 0; i < word.length; i++){
        if (vowels.includes(word[i])){
            counter++;
            
        }   
    }
    console.log(counter);
}

vowel();