document.querySelector('body').addEventListener('mousemove', eyeball);
		function eyeball() {
			var eye = document.querySelectorAll('.eye');
			eye.forEach(function(eye){
				let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
				let y = (eye.getBoundingClientRect ().top) + (eye.clientHeight / 2);
				let radian = Math.atan2(event.pageX - x, event.pageY - y);
				let rot = (radian * (180 / Math.PI) * -1) + 270;
				eye.style.transform = "rotate("+ rot +"deg)";
			})
		}

var tBody = document.querySelector('body');
var face = document.querySelectorAll('.face');

face.forEach(function(face) {
	face.addEventListener('mouseover', changeColor);
	face.addEventListener('mouseout', changeColor);

	function changeColor() {
		var tcolor = tBody.classList.toggle('tcolor');
		
	}
})
		

