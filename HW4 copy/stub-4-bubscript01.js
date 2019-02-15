// Bubble Sort Script, created 2/14/2015, last edited 2/14/2015, initAll(), ...

window.onload = initAll; // "initAll" is just a function name; see function.
var bubArray = new Array(10); // Working space for data and sorting


function initAll() {
	for (var i=0; i<10; i++) {
		var newNum = Math.floor(Math.random() * 25) + 1;

		document.getElementById("square" + i).innerHTML = " "+newNum+" ";
		document.getElementById("squareS" + i).innerHTML = " "+newNum+" ";
		bubArray[i] = newNum;
		//alert(bubArray[i]); // debug code for checking array elements.
		
	}

    bubSrt(bubArray);

}

	
/*function bubSrt(bubArray) {
    var length, n, swap, temp;
        length = bubArray.length;
        
        
	for (n=0; n<length; n++;) {
        swap = true;
    while (swap===true) {
        swap = false;
            if (bubArray[n] > bubArray[n+1]) {
                temp = bubArray[n];
                bubArray[n] = bubArray[n+1];
                bubArray[n+1] = temp;
                swap = true;
            }
        }
    }
}


function bubSrt(numbers) {
	var len = numbers.length;
	var counter = 0;
	var swap = true;
	var do_not_check = 0;

	while(swap)
	{
		counter = 0; //take this line out if you wanna go for/test the extra credit
		/*counter = do_not_check;
		do_not_check = 0;*/
		for(counter; counter<len -1; counter++)
		{
			swap = false;
			if(numbers[counter]>numbers[counter+1])
			{
				temp = numbers[counter];
				numbers[counter] = numbers[counter+1];
				numbers[counter+1] = temp;

				swap = true;
			}

			/*
			if((!swap) && counter>0)
			{
				do_not_check = counter-1;
			}
			*/
		}
	}


}



