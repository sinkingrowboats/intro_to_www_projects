/* JavaScript Forms, created 2/15/2015, last edited 2/15/2015
This program
(1) constructs a list of 50 state abbreviates
(2) uses a for loop to generate the list within the html */


window.onload = populate();


function populate() {
    var select = document.getElementById("selectState");      //select should call the HTML object with id #selectState
    var stateArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];                                                  //creates an array with the 50 state abbreviations
                         
    
    for (var i = 0; i < stateArray.length; i++) {                       //for loop will assign each array item to an option in the listOpt
        var opt = document.createElement("OPTION");                     //creates an <option> tag and assigns it to var opt
        opt.setAttribute("value", " " +stateArray[i]+ " ");             //sets the value of the new option as the name of a state
        var content = document.createTextNode(" " +stateArray[i]+ " "); //edits the content inside the <option> tags and fills with an item from stateArray 
        opt.appendChild(content);                                       //appends the text content to the option tag
        select.appendChild(opt);                                        //appends the option tag to the select tag
	}
}
        