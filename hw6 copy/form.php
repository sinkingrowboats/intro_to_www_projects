<!-- php file that contains the form data, along with some php for
     outputting invalid data warnings -->
<body>
<main>
    <header><h1>Tickets</h1></header>
    <form id="myform" method="post" action="registerData.php">
        <!-- First Name, Last Name, Email --> 
        <fieldset>
        	<div class='errormsg'><ul>
                    <!-- if invalid data was given, output a warning -->
                    <?php
                    	if (!$validArray['first_name']) {
                    		echo "<li>You must provide a first name</li>";
                    	}
                    	if (!$validArray['last_name']) {
                    		echo "<li>You must provide a last name </li>";
                    	}
                    	if (!$validArray['email']) {
                    		echo "<li>You must provide a valid email </li>";
                    	}
                    ?>
            </ul></div>
            <section>
                <div class="inline">
                    <label for="first-name">First Name <span>*</span></label>
                    <input type="text" id="first-name" name="first_name"
                	value="<?php echo htmlspecialchars($firstname) ?>"/>
                </div>
                <div class="inline">
                    <label for="last-name">Last Name <span>*</span></label>
                    <input type="text" id="last-name" name="last_name"
                    value="<?php echo htmlspecialchars($lastname)?>"/>
                </div>
            </section>
            <section>
                <div class="inline">
                    <label for="email">Email <span>*</span></label>
                    <input type="text" id="email" name="email"
                    	value="<?php if($validArray['email']) {echo htmlspecialchars($email);} else{echo '';} ?>"/>
                </div>
            </section>
        </fieldset> 

        <!-- Billing Address -->
        <fieldset class="billing">
        	<div class='errormsg'><ul>
                    <!-- if invalid data was given, output a warning -->
                    <?php
                    	if (!$validArray['street_address']) {
                    		echo "<li>You must provide a street address</li>";
                    	}
                    	
                    	if (!$validArray['city']) {
                    		echo "<li>You must provide a city of residence</li>";
                    	}
                        /* note, this just checks to see it the data was fully validated, because
                         * if it wasn't, the selector doesn't automatically pick the old state
                         * so this always gives a warning if the user doesn't give completely valid
                         * data so that way they will notice even if they put something in the state field the
                         * first time 
                         */
                    	if (!$validated) {
                    		echo "<li>You must provide a state of residence</li>";
                    	}
                    	if (!$validArray['zip_code']) {
                    		echo "<li>You must provide a valid zip code</li>";
                    	}
                    ?>
            </ul></div>
            <section>
                <div class="inline">
                    <label for="street-address">Address <span>*</span></label>
                    <input type="text" id="street-address" name="street_address"
                    	value="<?php echo $address ?>"/>
                </div>
                <div class="inline">
                    <label for="city">City <span>*</span></label>
                    <input type="text" id="city" name="city"
                    	value="<?php echo $city ?>"/>
            </div>
            </section>
            <section>
                <div class="inline">
                    <label for="state">State <span>*</span></label>
                    <select id="state" name="state" class="dropdown">
                    </select>
                </div>
                <div class="inline">
                    <label for="zip-code">Zip Code <span>*</span></label>
                    <input type="text" id="zip-code" name="zip_code"
                    	value="<?php if($validArray['zip_code']) {echo $zipcode;} else{echo '';} ?>"/>
                </div>
            </section>
        </fieldset>

        <!-- Payment Type -->
        <fieldset>
        		<div class='errormsg'>
                    <?php 
                        /* only checks validated for the same reasoning,
                         * not automatically repopulated */
                    	if (!$validated) {
                    		echo "You must select one of the following";
                    	}
                    ?>
           		</div>
                <label>Payment Method <span>*</span></label>
                <input type="radio" value="Credit Card" id="creditCard"
                name="payment">
                <label for="creditCard">Credit Card</label>
                <input type="radio" value="PayPal" id="paypal" name="payment">
                <label for="paypal">Paypal</label>
        </fieldset>

        <!-- Hear more -->
        <fieldset>
        		<div class='errormsg'>
                    <?php 
                        /* only checks validated for the same reasoning,
                         * not automatically repopulated */
                    	if (!$validated) {
                    		echo "You must select one of the following";
                    	}
                    ?>
            	</div>
                <label>Would you like to hear more? <span>*</span></label>
                <section class="centered" id="hearmore">
                <div class="inline">
                    <input type="checkbox" value="member" id="member"
                    name="hearmore[]">
                    <label for="member">I am already a member</label>
                </div>
                <div class="inline">
                    <input type="checkbox" value="newsletter" id="newsletter"
                    name="hearmore[]">
                    <label for="newsletter">Please send the newsletter</label>
                </div>
                <div class="inline">
                    <input type="checkbox" value="events" id="events"
                    name="hearmore[]">
                    <label for="events">I am interested in preshow events</label>
                </div>   
                </section>      
        </fieldset>

    <!-- Submit button to post the data -->
    <section class="centered"><input type="submit" value="Submit"
        class="btn"/></section>
    </form>
     <script src="reyForm.js"></script>
</main>
</body>