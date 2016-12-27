(function(){

var btn = document.querySelector("#getNumbers"),
    output = document.querySelector("#showNumers");


    function getRandom(min, max) {
        
        return Math.round(Math.random()*(max-min)+min);


    }

    function showRandomNumbers(){
 
        var numbers = [],
            random;


        for(var i =0; i<6;  i++ ){

            random = getRandom(1, 49); 
     
            while (numbers.indexOf(random) !== -1) {
                        random = getRandom(1, 49); 
                        console.log("powtórzyła się liczba " + random );
                    
                
            }

                        numbers.push(random);
         
        }
        console.log(numbers);

        output.value = numbers.join(", ");

    }

    btn.onclick = showRandomNumbers();

})();