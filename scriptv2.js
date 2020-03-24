//vars
	let card;
	let allCards = [];
	let playerHand = [];
	let playerHandAfterFlop = [];
	let dealerHand = [];
	let handValuePlayer = 0;
	let handValueDealer = 0;
	let handValuePlayerWithA = 0;
	let handValueDealerWithA = 0;
	let cardAux = 'c5';
  	var cardAuxContainer = 'cardAuxContainer';

// alert("For a better experience, prees F11 to enter in full screen mode");
// A
// ||
// ||
// ||
// ||
// ||

// function that choose a random card
function shot() {
	let counter = 0;
	let shootACard = Math.floor((Math.random() * 52) + 1);
	
	if ((shootACard < 37) && (shootACard > 4)){
		counter = shootACard;
	}else if(shootACard > 36) {
		counter = 10
	};

	switch(shootACard) {
		case (1):
	  	return "A h"  
	    break;
	    case (5):
	  	return "2 h"  
	    break;
	     case (9):
	  	return "3 h"  
	    break;
	     case (13):
	  	return "4 h"  
	    break;
	     case (17):
	  	return "5 h"  
	    break;
	     case (21):
	  	return "6 h"  
	    break;
	     case (25):
	  	return "7 h"  
	    break;
	     case (29):
	  	return "8 h"  
	    break;
	     case (33):
	  	return "9 h"  
	    break;
	     case (37):
	  	return "10 h"  
	    break;
	     case (41):
	  	return "J h"  
	    break;
	     case (45):
	  	return "Q h"  
	    break;
	     case (49):
	  	return "K h"  
	    break;
	     case (2):
	  	return "A d"  
	    break;
	       case (6):
	  	return "2 d"  
	    break;
	       case (10):
	  	return "3 d"  
	    break;
	       case (14):
	  	return "4 d"  
	    break;
	       case (18):
	  	return "5 d"  
	    break;
	       case (22):
	  	return "6 d"  
	    break;
	       case (26):
	  	return "7 d"  
	    break;
	       case (30):
	  	return "8 d"  
	    break;
	       case (34):
	  	return "9 d"  
	    break;
	       case (38):
	  	return "10 d"  
	    break;
	       case (42):
	  	return "J d"  
	    break;
	       case (46):
	  	return "Q d"  
	    break;
	       case (50):
	  	return "K d"  
	    break;
	       case (3):
	  	return "A s"
	  	break;
	       case (7):
	  	return "2 s"  
	  	break;
	       case (11):
	  	return "3 s"
	  	break;
	       case (15):
	  	return "4 s"  
	  	break;
	       case (19):
	  	return "5 s"  
	  	break;
	       case (23):
	  	return "6 s"  
	  	break;
	       case (27):
	  	return "7 s"  
	  	break;
	       case (31):
	  	return "8 s"  
	  	break;
	       case (35):
	  	return "9 s"  
	  	break;
	       case (39):
	  	return "10 s"  
	  	break;
	       case (43):
	  	return "J s"  
	  	break;
	       case (47):
	  	return "Q s"  
	  	break;
	       case (51):
	  	return "K s"  
	  	break;
	       case (4):
	  	return "A c"  
	  	break;
	       case (8):
	  	return "2 c"    
	    break;
	       case (12):
	  	return "3 c"    
	    break;
	       case (16):
	  	return "4 c"    
	    break;
	       case (20):
	  	return "5 c"    
	    break;
	       case (24):
	  	return "6 c"    
	    break;
	       case (28):
	  	return "7 c"    
	    break;
	       case (32):
	  	return "8 c"    
	    break;
	       case (36):
	  	return "9 c"    
	    break;
	       case (40):
	  	return "10 c"    
	    break;
	       case (44):
	  	return "J c"    
	    break;
	       case (48):
	  	return "Q c"    
	    break;
	       case (52):
	  	return "K c"
	  	 default:        
	  	 return "something went wrong";
	}
};

//assure that will be no duplicate cards during a game
function checkDuplicate() {
	for (i =0; i< allCards.length; i++) {
		if (allCards[i] === card){
	card = shot();
	i = 0;	
	}
  }
}

//hit 2 cards for each player
function dealResult(){
	hitCard(playerHand, 1, 'c1');
	hitCard(playerHand, 1, 'c2');
	hitCard(dealerHand, 1, 'c3');
	hitCard(dealerHand, 1, 'dealerHidenCard');  //security issue. can be seen from console 
	console.log("allCards",allCards,"\n", "player's hand",playerHand,"\n", "dealer's hand",dealerHand);
}

//this function hit a card and check to don't exist a duplicate and assign it to player / dealer and to 
//              allCard array for future check for duplicates
// 1st param - player / dealer Hand
//2nd param - *times the hit card function will run 
function hitCard(who, number, element) {
	for (var i = 0; i < number; i++) {	
		card = shot();
		checkDuplicate();
		// card1Player = card;
	  	allCards.push(card);
	  	who.push(card);
	}
	console.log(card);
	var textNode;
	textNode = document.createTextNode(card);
	console.log(document.getElementsByClassName(element)[0]);
	return document.getElementsByClassName(element)[0].appendChild(textNode);
}

//this function calculate the sum of hand
// 1st param - player / dealer hand
//2nd param - var where the result of sum will be stored 
//3rd param - var where the result of sum will be stored in case of A is shot	
function sumOfHand(whosHand, whosValue,varWithA,htmlElem) {
	debugger
	for (var i = 0; i < whosHand.length; i++) {
		 let handValue = whosHand[i].charAt(0);
		 // console.log(whosHand[i].charAt(0));
		 if (handValue > 1 && handValue <= 9) {
		 	handValue = parseInt(handValue)
		 	whosValue = whosValue + handValue;
		 	varWithA = varWithA + handValue;
		 } else if (handValue === "J" || handValue === "Q" || handValue === "K" || handValue === "1" || handValue === "A") {
		 	if (handValue === "A") {
		 		varWithA = varWithA + 1;
		 		whosValue = whosValue + 11;
		 	} else {

		 	handValue = 10;
		 	varWithA = varWithA + handValue; 
		 	whosValue = whosValue + handValue;
		 	}		 		
		 }
		 };
		 // document.getElementById(htmlElem).innerHTML(whosHand.value);
		 console.log(whosHand);
		 console.log(whosValue);

		 if (whosValue > 21 && varWithA > 21) {
		 	document.getElementById(htmlElem).innerHTML= "Busted!";
		 	document.getElementById('pScoreNum').style.backgroundColor='red';
		 	document.getElementById('pScoreNum').style.textAlign='center';
			stopGame();
		 	btnReset();
		 } else if (whosValue === 21 || varWithA === 21) {
		 	stopGame();
		 	document.getElementById(htmlElem).innerHTML= "BlackJack!";
		 } else if (whosValue > 21 && varWithA != 21) {
		 	document.getElementById(htmlElem).innerHTML= varWithA;
		 }  else if (varWithA < whosValue) {
		 	document.getElementById(htmlElem).innerHTML= whosValue + `/` + varWithA;
		 } else {
		 	document.getElementById(htmlElem).innerHTML= whosValue;
		 }
 
	return whosValue; 	 
		
}

// this function will "start" the game
// hide start button
// show the other in games buttons
// deal & display cards

  function startGame() {	
    document.getElementsByClassName("bhit")[0].style.display = "inline-block";
    document.getElementsByClassName("bstop")[0].style.display = "inline-block";
    document.getElementsByClassName("bstart")[0].style.display = "none";
    
    document.getElementsByClassName("pcard")[0].style.display = "inline";
    document.getElementsByClassName("pcard")[1].style.display = "inline";
    document.getElementsByClassName("pcard")[2].style.display = "inline";
    document.getElementsByClassName("pcard")[3].style.display = "inline";

    dealResult();
    score();
  };

    function score() { //modificata functia cu parametri pentru curatarea codului
  		handValuePlayer = sumOfHand(playerHand, handValuePlayer,handValuePlayerWithA,'pScoreNum');
  		// handValueDealer = sumOfHand(dealerHand, handValueDealer,handValueDealerWithA,'dScoreNum'); daca il las vizibil, vom vedea si scorul dealerului inainte de a apasa stop joc
  };

    function hit() {
  	let divElem,divElem2; 
  	divElem = document.createElement("DIV");
  	divElem2 = document.createElement("DIV");

	divElem2.setAttribute("id",'cardAuxContainer');
	divElem.setAttribute("id","card");
	console.log("container",document.getElementById(cardAuxContainer));
	document.getElementById("table").appendChild(divElem2);
	document.getElementById("cardAuxContainer").appendChild(divElem);     
	divElem.setAttribute("class",cardAux);
	// divElem.className += " newCardPosition";
	hitCard(playerHand,1,cardAux);
	
	// var margin = '0px';
	// margin = document.getElementsByClassName(cardAux)[0].style.marginTop += '10%';
	cardAux = cardAux + 1;
	//divv += 1;  //
	// cardAuxContainer += "1";
	score();

  };

  function stop() {
	var fElem = document.getElementById('reveal');
	document.getElementsByClassName('c4')[0].innerHTML= fElem.innerHTML;
	// document.getElementsByTagName("button")[2].removeAttribute('onclick'); 
	// document.getElementsByTagName("button")[2].style.backgroundColor='black';
	stopGame();

	handValueDealer = sumOfHand(dealerHand, handValueDealer,handValueDealerWithA,'dScoreNum');
	// if handValuePlayer > handValueDealer
	// for(i = handValueDealer; i< handValuePlayer)
	divElem2 = document.createElement("DIV");
	divElem2.setAttribute("class",'newCardPositionDealer');
	// divElem2.setAttribute("id",'cardAuxContainer2');
	document.getElementById("table").appendChild(divElem2);

	while(handValueDealer< handValuePlayer) {
		  	var divElem = document.createElement("DIV");
			divElem.setAttribute("id","card");
			document.getElementsByClassName('newCardPositionDealer')[0].appendChild(divElem);     
			divElem.setAttribute("class",cardAux);
			// divElem.className += " newCardPositionDealer";
			hitCard(dealerHand,1,cardAux);//divElem.getAttribute('class',cardAux));
			cardAux = cardAux + 1;  
			handValueDealer = sumOfHand(dealerHand, handValueDealer,handValueDealerWithA,'dScoreNum'); // => e functia score care trebuie rectificata cu parametrii
	}	
	debugger
	if (handValueDealer === handValuePlayer) {
		document.getElementById('text').innerHTML='Tie !';
	}else if(handValueDealer < handValuePlayer) {  //trebuie adaugata conditii concrete pe cifre
		document.getElementById('text').innerHTML='You Win !';
	}else {
		document.getElementById('text').innerHTML='You Lost !';
	}

};

  function stopGame() {
			document.getElementsByClassName("bhit")[0].style.display = "none";
		    document.getElementsByClassName("bstop")[0].style.display = "none";
};

function btnReset() {
	document.getElementsByClassName('breset')[0].style.display='block';
};

function reload(){
	location.reload();
}

  function delay() {

  };
