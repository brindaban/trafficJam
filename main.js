//ABHISHEK
var readline = require('readline');
var lib={};
lib.b=require('./libTraffic.js').module;
lib.a=require('./InputLib.js').lib;
lib.r=require('./traficLib.js').lib;

var road=['A5','A4','A3','A2','A1','','B1','B2','B3','B4','B5'];
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true  
});
var terminatingCond=function(){
	var state=lib.b.isTerminate(road,lib.r.getEmptyPosition(road));
	if(state==true)
		console.log('\n\n\nCONGRATULATION FINALLY YOUR BRAIN STARTED WORKING !!!!');
	else
		console.log("\n\n\nDON'T YOU HAVE A BRAIN..?? IT'S A TRAFFIC JAM");
	process.exit(0);
};

var takeInput=function(validMove){
rl.on('line',function(userMove) {
	userMove=userMove.toUpperCase();
	var move=lib.r.swapPosition(road,validMove,userMove);
	if(move!='err'){
		road=move;
		lib.a.display(readline,road);
		var validMoves=lib.b.checkValidOption(road);
		if(validMoves.length==0)
			terminatingCond();
		//console.log("\n\n\nValid Moves are "+validMoves.join(','),"Enter your Moves...");
		console.log("\n\n\nWhom do you want to move..");
	}
	else
		console.log('!!!!Invalid Move...');
});
}
lib.a.display(readline,road);					
var validMoves=lib.b.checkValidOption(road);
if(validMoves.length==0)
	terminatingCond();
//console.log("\n\n\nValid Moves are "+validMoves.join(',')," Enter your Moves...");
console.log("\n\n\nWhom do you want to move..")
takeInput(validMoves);