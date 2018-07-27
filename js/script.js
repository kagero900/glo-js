function myFirstApp(name, age) {

	alert("Hello! My name is " + name + " and it's my first program!");

	function showSkills() {
		let skills = [
		'html',
		'css',
		'horse riding',
		'motocross'
		]

		for (let i = 0; i < skills.length; i++) {
			document.write('I have ' + skills[i] + '.<br>' );

		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert('You can enter!');
		} else {
			alert('You are not Prepared!');
		}
	}

	checkAge();

	function calcPow(num) {
		document.write('The result of squaring ' + num + ' is ' + num * num);
	}

	calcPow(4);
}

myFirstApp("Asgerd", 33)