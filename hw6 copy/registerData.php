<?php
		/* created 3/4/17 finished 3/5/17*/
		/* Samantha Rey, Homework 6A */
		/* this php files handles all of the form validation logic */
		ini_set('display_errors', 1);
		error_reporting(E_ALL | E_STRICT);

		/* begin with validated boolean as true, if any validation comes up false,
		 * the boolean will change to false so the success page won't trigger,
		 * boolean only stays true if every validation check comes up true and the
		 * whole form was correctly validated
		 */
		$validated = true;
		/* an array containing booleans that correspond to 'keys' sent with the post data
		 * useful for issuing specific warnings in form.php
		 */
		$validArray = array();
		/* foreach loop that runs through all the 'keys' in the post data and validates
		 * their corresponding values */
		foreach ($_POST as $key => $value) {
			switch ($key) {
				case "first_name":
					$firstname = isset($_POST['first_name'])? $_POST['first_name']: '';
					if ($firstname == '') {
						$validated = false;
						$validArray[$key] = false;
					}
					else {
						$validArray[$key] = true;
					}
					break;
				case "last_name":
					$lastname = isset($_POST['last_name'])? $_POST['last_name']: '';
					if ($lastname == '') {
						$validated = false;
						$validArray[$key] = false;
					}
					else {
						$validArray[$key] = true;
					}
					break;
				case "street_address":
					$address = isset($_POST['street_address'])? $_POST['street_address']: '';
					if ($address == '') {
						$validated = false;
						$validArray[$key] = false;
					}
					else {
						$validArray[$key] = true;
					}
					break;
				case "city":
					$city = isset($_POST['city'])? $_POST['city']: '';
					if ($city == '') {
						$validated = false;
						$validArray[$key] = false;
					}
					else {
						$validArray[$key] = true;
					}
					break;
				case "state": 
					$state = isset($_POST['state'])? $_POST['state']: '';
					if ($state == '') {
						$validated = false;
						$validArray[$key] = false;
					}
					else {
						$validArray[$key] = true;
					}
					break;
				case "email" :
					$email = isset($_POST['email'])? $_POST['email']: '';
					if (preg_match("/^[^@]+@.+[.][a-zA-Z]+$/", $email) == 0) {
						$validated = false;
						$validArray[$key] = false;
					}
					else {
						$validArray[$key] = true;
					}
					break;
				case "zip_code":
					$zipcode = isset($_POST['zip_code'])? $_POST['zip_code']: '';
					if (preg_match("/^\d{5}$/", $zipcode) == 0) {
						$validated = false;
						$validArray[$key] = false;
					}
					else {
						$validArray[$key] = true;
					}
					break;
				case "payment":
					$payment = isset($_POST['payment'])? $_POST['payment']: '';
					if (!(($payment == "Credit Card")||($payment == "PayPal"))) {
						$validated = false;
						$validArray[$key] = false;
					}
					else {
						$validArray[$key] = true;
					}
					break;
			} 
		}
		/* since there is the possibility that the user didn't even put in payment data
		 * check if the payment key even exists in the post data, if it's not there
		 * make it's validArray boolean false and make validated false */
		if(!array_key_exists('payment', $_POST)) {
			$validated = false;
			$validArray['payment'] = false;
		}
		/* since there is the possibility that the user didn't click the check boxes
		 * check if the "hearmore" key even exists in the post data, if it's not there
		 * make it's validArray boolean false and make validated false */
		if (!array_key_exists('hearmore', $_POST)) {
			$validated = false;
			$validArray['hearmore'] = false;
		}
		else {
			$validArray['hearmore'] = true;
		}
		include('headers.html');

		/* if the form was successfully validated, display the success page */
		if($validated) {
			include('success.php');
		}
		/* if the form wasn't successfully validated, display the form again */
		else {
			include('form.php');
		}
?>
</html>