/* Samantha Rey, Homework 4 part B */
/* created 2/18/2017, last edited 2/18/2017 */

//run the addState() code on page load
window.onload = addStates();

function addStates() {
	//create variable that holds object with id "state"
	var selector = document.getElementById("state"); 
	//50 state abbreviations in one element
	var stateArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
	
	//create and append default element
	var newOption = document.createElement("OPTION");
	newOption.setAttribute("value", "");
	var text = document.createTextNode("Select A State");
	newOption.appendChild(text);
	selector.appendChild(newOption);

	/* create an option element for each item in stateArray
	 * and append it to the selector element so it appears
	 * on the page */
	for (var i = 0; i < stateArray.length; i++) {
		newOption = document.createElement("OPTION");
		newOption.setAttribute("value", " " + stateArray[i] + " ");
		text = document.createTextNode(" " + stateArray[i] + " ");
		newOption.appendChild(text);
		selector.appendChild(newOption);                                      
	}
}
	  