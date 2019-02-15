<!-- HTML output for successfully validated data -->
<h2>Thank You For Your Patronage!</h2>
<h3>Your request will be processed immediately</h3>
<table>
	<?php

		/* HW6 Part B, append posted data to a file */
		function writeToFile($datarray) {
			$log = fopen("log.txt", "a");
			date_default_timezone_set('America/Chicago');
			unset($datarray['hearmore']);
			$date = date("YmdHis");
			$imploded = implode("|||", $datarray);
			$write = $date . "|||" . $imploded . "\n";
			fwrite($log, $write);
			fclose($log);
		}

		foreach($_POST as $key => $value) {
			/* some specific output rules for the "hearmore" data */
			if($key == 'hearmore') {
				$count = 0;
				foreach($_POST['hearmore'] as $option) {
					if($count == 0) {
						echo "<tr><td>Would you like to hear more?</td>";
					}
					else {
						echo "<tr><td></td>";
					}
					echo "<td>";
					switch($option) {
						case "member":
							echo "I am already a member";
							break;
						case "events":
							echo "I am interested in pre show events";
							break;
						case "newsletter":
							echo "I would like to receive the newsletter";
							break;
					}
					echo "</td></tr>";
					$count++;
				}
			}
			/* output the key value pair as elements of a html data table */
			else {
				echo "<tr><td>";
				echo htmlspecialchars(str_replace('_', ' ', $key));
				echo "</td><td>";
				echo htmlspecialchars($value);
				echo "</td></tr>";
			}
		}
		writeToFile($_POST);
	?>
</table>