let images = ["1.png",
"2.png",
"3.png",
"4.png",
"5.png",
"6.png"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("rotate");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("rotate");
        });
        let dieOneValue = Math.floor(Math.random()*6 );
        let dieTwoValue = Math.floor(Math.random()*6 );
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue+1) );
    },
    1000
    );
}
roll();