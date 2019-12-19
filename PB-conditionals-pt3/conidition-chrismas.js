let aleezaTeamScoreAv= (89+103+120)/3;
let lizTeamScoreAv=(116+94+123)/3;
let maryTeamScoreAv=(97+134+105)/3;
console.log(maryTeamScoreAv);
console.log(aleezaTeamScoreAv);
console.log(lizTeamScoreAv);


if(aleezaTeamScoreAv>lizTeamScoreAv && aleezaTeamScoreAv>maryTeamScoreAv){
    console.log('winner is : '+ 'aleeza\'s team ' +'and the score was: '+ aleezaTeamScoreAv);
}
else if(lizTeamScoreAv>maryTeamScoreAv ){
    console.log('winner is :' +'liz\'s team ' + 'and the score was : '+ lizTeamScoreAv);
}
else if(maryTeamScoreAv>lizTeamScoreAv){
    console.log('winner is : ' + 'mary\'s team ' + 'and the average score was '+ maryTeamScoreAv);
}
else{
    console.log('we have a draw , all teams are averagely equal');
}



