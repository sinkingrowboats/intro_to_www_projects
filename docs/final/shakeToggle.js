plays = document.getElementsByClassName("playheader");


var hiliteMe = function() {
	var className = this.className;
	var hilited = " hilited";
	if(className.search(hilited) < 0) {
		this.className = className + hilited;
	}
}

var unhiliteMe = function() {
	var className = this.className;
	var hilited = " hilited";
	if(className.search(hilited) >= 0) {
		var replacedClass = className.replace(hilited, "");
		this.className = replacedClass;
	}
}

var togglePlotSum = function() {
	var id = this.id;
	var idnum = parseInt(id);
	var arraynum = idnum - 1;
	var className = this.className;

	var description = document.getElementById("play" + id);

	var clicked = " clicked";
	if(className.search(clicked) < 0) {
		if(arraynum % 2 == 0) {
			togglePlotOff((arraynum + 1));
		}
		else {
			togglePlotOff((arraynum - 1));
		}
		this.className = className + clicked;
		description.style.display = 'block';
	}
	else {
		var replacedClass = className.replace(clicked, "");
		this.className = replacedClass;
		description.style.display = 'none';
	}
}

function togglePlotOff(arrayindex) {
	var neighbor = plays[arrayindex];
	var neighborClass = neighbor.className;
	var idnum = arrayindex + 1;
	var idstring = "0" + idnum;

	var neighborDesc = document.getElementById("play" + idstring);

	var clicked = " clicked";
	if(neighborClass.search(clicked) >= 0) {
		var replacedClass = neighborClass.replace(clicked, "");
		neighbor.className = replacedClass;
		neighborDesc.style.display = 'none';
	}
}

for (var i = 0; i < plays.length; i++) {
	plays[i].addEventListener('mouseover', hiliteMe);
	plays[i].addEventListener('mouseout', unhiliteMe);
	plays[i].addEventListener('click', togglePlotSum);
}