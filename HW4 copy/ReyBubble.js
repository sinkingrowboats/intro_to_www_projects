/* Bubble Sort Script, created 2/14/2015, last edited 2/15/2015
This program
(1) generates a pseudo-random list of 10 numbers
(2) populates the table written into the html with the random numbers
(3) orders the 10 numbers from smallest to largest
(4) populates the bottom row of the table with these numbers */

window.onload = initAll; //loads the main function
var bubArray = new Array(10); //creates a new array with 10 empty items

function initAll() {
//generates numbers
	for (var i=0; i<10; i++) {
		var newNum = Math.floor(Math.random() * 25) + 1;

		document.getElementById("square" + i).innerHTML = " "+newNum+" ";
		bubArray[i] = newNum;
	}

//sorts numbers
    bubSrt(bubArray);

//populates table with numbers
    for (var i=0; i<10; i++) {
        document.getElementById("squareS" + i).innerHTML = bubArray[i];
    }
}
//end function


function bubSrt(bubArray) {
    var length = bubArray.length; //declares variables
    var n = 0;
    var swap = true;
    
    do {
    swap = false;
        for(n = 0; n < length; n++) { //when the numbers have a bad order, this carries out
            if(bubArray[n] > bubArray[n+1]) {
                var temp = bubArray[n]; //code for the number swap
                bubArray[n] = bubArray[n+1];
                bubArray[n+1] = temp;
                
                swap = true; //declares a swap when a change has been made
            }
        }
    } while(swap === true); //perpetuates loop while the swap variable is true
}
//end function
