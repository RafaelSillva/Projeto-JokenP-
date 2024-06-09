const myResult = document.querySelector('.result')

const youScore = document.querySelector('#you-score')

const machineScore = document.querySelector('#machine-score')


let youScoreNumber = 0
let machineScoreNumber = 0

let victory = new Audio('./assests/brass-fanfare-reverberated-146263.mp3');
victory.volume = 0.1;

let defult = new Audio('./assests/failure-1-89170.mp3');
defult.volume = 0.1;

let aTie = new Audio('./assests/sword-schwing-40520.mp3');
aTie.volume = 0.1;

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('humano: ' + human + " Maquina: " + machine)
    if (human === machine) {
        myResult.innerHTML = "Empate!"
        aTie.play();
        aTie.currentTime = 0;
        document.querySelector('.result').style.color = 'teal'
    } else if (human === 'paper' && machine === 'rock' || human === 'rock' && machine === 'scissors' || human === 'scissors' && machine === 'paper') {
        youScoreNumber++
        youScore.innerHTML = youScoreNumber
        victory.play();
        victory.currentTime = 0;
        myResult.innerHTML = "Você ganhou!"
        document.querySelector('.result').style.color = 'green';
        

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        defult.play();
        defult.currentTime = 0;
        myResult.innerHTML = "Você perdeu para o Zed!"
        document.querySelector('.result').style.color = 'red'
    }

}

