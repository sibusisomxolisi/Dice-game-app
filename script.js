let scores,roundScore,activePlayer,dice;
let gameOn=true;       

inialValues();
 
    document.querySelector('.btn-roll').addEventListener('click',()=>{
        if(gameOn){
        //1. random number
        dice=Math.floor(Math.random() *6)+1;
        console.log(dice);
    
        //2. display the result on HTML page
        let picDice=  document.querySelector('.dice');
            picDice.style.display='inline';
            picDice.src='dice-' + dice +'.png';
    
        //3. update the round score if the rolled number was not a 1
        if(dice !==1){
            //add score
            roundScore+=dice;
            console.log('total score'+roundScore);
            document.querySelector('#current-' + activePlayer).textContent=roundScore;
    
        }else{
          
            nextPlayer();
    
        }
    }
        
    
     });




 document.querySelector('.btn-hold').addEventListener('click',()=>{
      
      if(gameOn){
      
        //Add curent score to gloabal score
        scores[activePlayer]+= roundScore;
        //update the UI
        document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
        let inputV=document.querySelector('.winScore').value;
        let winScore;
        console.log(inputV);
        if (inputV) {
            winScore=inputV;
        }
        else{
            winScore=30;
        }
        //check if player won the game
        if(scores[activePlayer]>=winScore){
        document.getElementById('name-'+activePlayer).textContent='You won!!!!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        gameOn= false;
        }else{
        //next player
        nextPlayer();
        }
    }
    
 });
 function nextPlayer(){
    //next player
  
        activePlayer===0 ? activePlayer=1 : activePlayer=0;
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none'; 
 }
 document.querySelector('.btn-new').addEventListener('click',inialValues);



        function inialValues(){
            scores=[0,0];
            roundScore=0;
            activePlayer=0;
            gameOn=true;

            document.querySelector('.dice').style.display='none';
            document.getElementById('score-0').textContent='0';
            document.getElementById('score-1').textContent='0';
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
            document.getElementById('name-0').textContent='Player 1';
            document.getElementById('name-1').textContent='Player 2';

        }