var randomNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var crystalTotal = 0;

var winCount = 0;
var lossCount = 0;






$(document).ready(function() {

	

	function startGame (){

		randomNumber = Math.floor(Math.random() * 120) + 19;
		crystal1 = Math.floor(Math.random() * 12) + 1;
		crystal2 = Math.floor(Math.random() * 12) + 1;
		crystal3 = Math.floor(Math.random() * 12) + 1;
		crystal4 = Math.floor(Math.random() * 12) + 1;
		crystalTotal = 0;



		$(".randomNum").html(randomNumber);
		$(".1").data("crystal1");
		$(".2").data("crystal2");
		$(".3").data("crystal2");
		$(".4").data("crystal2");
		$(".userScore").html(crystalTotal);

	

	
		console.log(randomNumber);
		console.log(crystal1);
	    console.log(crystal2);
	    console.log(crystal3);
	    console.log(crystal4);
	    $(".1").on("click", function (){
	    	console.log(crystal1);
	    });
	    $(".2").on("click", function (){
	    	console.log(crystal2);
	    });
	    $(".3").on("click", function (){
	    	console.log(crystal3);
	    });
	    $(".4").on("click", function (){
	    	console.log(crystal4);
	    });
  	}

  	function userTotal (){
          $(".1").on("click", function (){ 
          
  			crystalTotal += crystal1;
  			$(".userScore").html(crystalTotal);
  			
  			checkScore ();
  		})
  		$(".2").on("click", function () {
        
  			crystalTotal += crystal2;
  			$(".userScore").html(crystalTotal);
  			checkScore();
  		
  		})
  		$(".3").on("click", function () {
       
  			crystalTotal += crystal3;
  			$(".userScore").html(crystalTotal);
  			checkScore();
  		
  		})
  		$(".4").on("click", function () {
       
  			crystalTotal += crystal4;
  			$(".userScore").html(crystalTotal);
  			checkScore ();
  		})

  	}

  	function checkScore() {
  		if (crystalTotal == randomNumber) {


  			winCount++;
  
  			
  	


  			startGame();
  		}

  		else if (crystalTotal > randomNumber) {
  			lossCount++;

  			

  			startGame ();
  		};

  		
  	};




	    	startGame();
	    	userTotal ();
	    


});