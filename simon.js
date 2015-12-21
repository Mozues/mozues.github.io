// (function(){
//  	"use strict";

//  });

var sequence = [];
var colors = ["red", "blue", "green", "yellow"];
var step = 0;

//animate the color sequence
var animate = function(){
	sequence.forEach(function(color, id){
		// debugger
		setTimeout( function(){
			$('.'+color).animate({opacity: 1.0});			
		}, (id+1) * 500);

		setTimeout(function(){
			$('.'+color).animate({opacity: 0.6});
		},(id+1)*250)	
	})
	
}// animate 

//function that adds a number to the array randomly
	var generateColor = function() {
		// pick a random color
		// push onto previous sequence
		var randomIndex = Math.floor(Math.random() * 4);
		var randomColor = colors[randomIndex];
		sequence.push(randomColor);

		// console.log(sequence);
		console.log("generated " + randomColor + " step: "+ step);
		animate();
	}

	$('.box').click(function(e){
		// debugger
		colorClicked = e.target
		if ( e.target.id === sequence[step]){
			step += 1;
			console.log('step: ' + step + " of " + sequence.length)
			if(step === sequence.length){
				step = 0;
			}
		}else{
			console.log('sorry charlie')
			sequence = [];
			step = 0;
		}
		// animate();
		console.log(sequence);
		generateColor()
	}) // click listener



generateColor();
// animate();