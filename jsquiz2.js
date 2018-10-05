(function () {
    var slider = document.getElementById("myRange");
    var no_questions = document.getElementById("no_questions");
    slider.step = 5;
    no_questions.innerHTML = slider.value; // Display the default slider value
	localStorage.setItem("slider_value", slider.value);	
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
        no_questions.innerHTML = this.value;
		localStorage.setItem("slider_value", slider.value);	
    }
	
	

})()
