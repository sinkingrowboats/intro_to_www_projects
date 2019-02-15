/* Samantha Rey, Homework 5 javascript*/
/* created 3/2/2017, last edited 3/3/2017 */

//Array of state abbreviations to use
stateArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
//Add the states to the state selector on load
window.onload = addStates();

/* ---------------- PART A ---------------- */
/* checks the userAgent to see what browser we're using and writes
 * it to the html page
 */
function browser() {       
    var browsermsg = "thank you for browsing our website";

    /* NOTE: v in the regex comments is the version number of the browser,
     * not the letter v
     */
    /* If the user agent string contains "Chrome/v" */
    if (/Chrome\/\d+/.test(navigator.userAgent)) {
        document.open();
        document.write("Served over Chrome Web Browser");
        document.close();
    }
    
    /* If the user agent string contains "Firefox/v" */
    else if (/Firefox\/\d+/.test(navigator.userAgent)) {
        document.open();
        document.write("Served over Firefox Web Browser");
        document.close();
    }

    /* If the user agent string contains "Safari/v" */
    else if (/Safari\/\d+/.test(navigator.userAgent)) {
        document.open();
        document.write("Served over Safari Web Browser");
        document.close();
    }
}


/* ---------------- PART B ---------------- */
/* validates the inputs in the form and sends the form if they're all valid */
function validator() {
    var validated = true;
    var localState = stateArray;

    /* get all of the values input into the form and place them into variables
     * so we can test their validity. also, get a corresponding html element
     * so we can change some of the css and issue a warning if the validation
     * comes out wrong */
    var firstName = document.getElementById("first-name");
    var firstNameInput = document.forms["myform"]["first_name"].value;
    var lastName = document.getElementById("last-name");
    var lastNameInput = document.forms["myform"]["last_name"].value;
    var address = document.getElementById("street-address");
    var addressInput = document.forms["myform"]["street_address"].value;
    var city = document.getElementById("city");
    var cityInput = document.forms["myform"]["city"].value;
    var state = document.getElementById("state");
    var stateInput = document.forms["myform"]["state"].value;
    var zipCode = document.getElementById("zip-code");
    var zipCodeInput = document.forms["myform"]["zip_code"].value;
    var email = document.getElementById("email");
    var emailInput = document.forms["myform"]["email"].value;
    var payment = document.forms["myform"]["payment"].value;
    /* note, we have to get all of the checkboxes individually to check
     * whether or not they've been checked. you can't just get the array
     * from document.forms, or at least I tried and couldn't figure out how
     */
    var member = document.getElementById("member").checked;
    var newsletter = document.getElementById("newsletter").checked;
    var events = document.getElementById("events").checked;
    
    /* make sure the first name isn't empty */
    if (firstNameInput == "") {
        addBorder(firstName);
        validated = false;
    }
    else {
        removeBorder(firstName);
    }

    /* make sure the last name isn't empty */
    if (lastNameInput == "") {
        addBorder(lastName);
        validated = false;
    }
    else {
        removeBorder(lastName);
    }

    /* make sure the address isn't empty */
    if (addressInput == "") {
        addBorder(address);
        validated = false;
    }
    else {
        removeBorder(address);
    }

    /* make sure that the city isn't empty */
    if (cityInput == "") {
        addBorder(city);
        validated = false;
    }
    else {
        removeBorder(city);
    }

    /* makes sure an option was selected from the state drop down list, and that
     * what is being sent is actally something in the drop down list and not some
     * sort of spoofed value
     */
    if(stateArray.indexOf(stateInput) < 0) {
        state.style["border"] = "1px solid red";
        validated = false;
    }
    else {
        console.log(stateArray.indexOf(stateInput));
        state.style["border"] = "1px solid grey";
    }

    /* check if the zipcode is valid. the assumes that a valid zipcode
     * has 5 and only 5 numeric digits 
     */
    if (!(/^\d{5}$/.test(zipCodeInput) > 0)) {
        addBorder(zipCode);
        validated = false;
    }
    else {
        removeBorder(zipCode);
    }

    /* check if email is valid. the regex assumes that a valid email
     * takes the form [some characters that arent '@']@[some more characters].[some letters]
     * I set the end to check for letters only on the assumption that all top level domains have
     * only letters
     */
    if (!(/^[^@]+@.+[.][a-zA-Z]+$/.test(emailInput) > 0)) {
        addBorder(email);
        validated = false;
    }
    else {
        removeBorder(email);
    }

    /* make sure a payment radio button was actually selected and that
     * it is one of the correct values for payment type
     */
    if((payment != "Credit Card") && (payment != "BitCoin")) {
        var payment = document.getElementById("paymentwarning");
        payment.style["visibility"] = "visible";
        validated = false;
    }
    else {
        var payment = document.getElementById("paymentwarning");
        payment.style["visibility"] = "hidden";
    }

    /* make sure at least one of the checkboxes is checked, if not
     * give a warning
     */
    if (!(member || newsletter || events)) {
        var choose = document.getElementById("choosewarning");
        choose.style["visibility"] = "visible";
        validated = false;
    }
    else {
        var choose = document.getElementById("choosewarning");
        choose.style["visibility"] = "hidden";
    }

    /* if all the checks pass, then none of the input values change
     * the boolean to false, and the form is submitted
     */
    if (validated) {
        document.getElementById("myform").submit();
    }
}

/* helper function that adds a glowing red border */
function addBorder(element) {
    element.style["border"] = "1px solid red";
    element.style["boxShadow"] = "0 0 7px red";
}

/* helper function that removes the glowing red border */
function removeBorder(element) {
    element.style["border"] = "none";
    element.style["boxShadow"] = "none";
}

/* ---------------- HW4 CODE ---------------- */

/* add states function, brought in from last project, except I moved
 * the stateArray out of the function to be a global so I could also
 * use it in the validator function
 */
function addStates() {
    //create variable that holds object with id "state"
    var selector = document.getElementById("state"); 
    
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
        newOption.setAttribute("value", "" + stateArray[i] + "");
        text = document.createTextNode("" + stateArray[i] + "");
        newOption.appendChild(text);
        selector.appendChild(newOption);                                      
    }
}