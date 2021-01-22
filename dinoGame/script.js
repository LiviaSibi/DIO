const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const segundos = document.querySelector('.seconds');

let isJumping = false;
let isGameOver = false;
let position = 0;
let seconds = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval)
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20)
        }
        else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20)
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    if (isGameOver) return;

    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px';

    let leftTimer = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftTimer);
            background.removeChild(cactus);
        } 
        else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftTimer);
            isGameOver = true;
            clearInterval(score)
            document.body.innerHTML = '<div class="end"><h1 class="gameOver">GAME OVER!</h1>\n <h3 class="seconds">SCORE :  '  + seconds + '</h3>\n <button class="tryAgain" onclick="window.location.reload()">TRY AGAIN?</button></div>';
        } 
        else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20)

    setTimeout(createCactus, randomTime);
}

function count() {
    seconds += 1;
    segundos.innerHTML = "SCORE :  " + seconds;
}
var score = setInterval(count, 1000);

createCactus();
count();

document.addEventListener('keyup', handleKeyUp);