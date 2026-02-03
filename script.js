function makeBubble(){
    let clutter = '';
    for(let i=0; i<=132; i++){
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector('#panelBottom').innerHTML = clutter;
}

let time = 60;
function runTimer(){
    let interval = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector('#timer').textContent = time;
        }
        else{
            document.querySelector('#timer').textContent = "Time's up!!!";
            clearInterval(interval);
            document.querySelector('#panelBottom').innerHTML = "<h1>Game Over</h1>";
        }
    },1000);
}

function getHitValue(){
    document.querySelector('#hit').textContent = Math.floor(Math.random()*10);
}

function realGameLogic(){
    let scoreVal = 0;
    let panelBottom = document.querySelector('#panelBottom');
    panelBottom.addEventListener('click', function(event){
        let score = document.querySelector('#score');
        if(event.target.textContent === document.querySelector('#hit').textContent){
            scoreVal += 10;
        }        
        else{
            scoreVal -= 10;
        }
        score.textContent = scoreVal;
        getHitValue();
        makeBubble();
    })

}

realGameLogic();
getHitValue();
runTimer();
makeBubble();