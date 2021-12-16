var coins = 0;
var workers = 0;
var workerPrice = 10;
var countUpdates = 0;
var giveMoney = 1;
var updatePrice = 14;
var fiveWorkersPrice = 45;
var tenWorkersPrice = 80;
var nextButonClickCounter = 1;
var input = 0;
var currentInput = 0;
function gameLoop() {
    document.getElementById("addWorker").innerText = workers;
    updateCoins();
    document.getElementById("workersPrice").innerText = workerPrice.toFixed(0);
    workersMoney();
    document.getElementById("updates").innerText = countUpdates.toFixed(0);
    updateWorkers();
    updateUpdates();
}
setInterval(gameLoop, 100);
function addCoins() {
    coins++;
    updateCoins();
    for (let i = 0; i <= 1000000; i++) {

        if (countUpdates == i) {
            coins += i;
        }
    }

}
function updateCoins() {
    document.getElementById("addingCoins").innerText = coins.toFixed(0);
}

function updateWorkers() {
    document.getElementById("addWorker").innerText = workers.toFixed(0);
    document.getElementById("fiveWorkers").innerText = fiveWorkersPrice.toFixed(0);
    document.getElementById("tenWorkers").innerText = tenWorkersPrice.toFixed(0);

}

function updateUpdates() {
    document.getElementById("updatePrice").innerText = updatePrice;
}
function buyWorker() {
    if (coins >= workerPrice) {
        workers++;
        coins = coins - workerPrice;
        workerPrice = workerPrice * 10 / 4;
        playAudio('C:/Users/Userr/Desktop/clickerGame/Sounds/hammer.mp3')

    }
}
function workersMoney() {
    coins += workers / 5;
}
function upgrateClick() {
    if (coins >= updatePrice) {
        coins = coins - updatePrice;
        countUpdates++;
        updatePrice = (updatePrice * 10 / 3).toFixed(0);
        playAudio('C:/Users/Userr/Desktop/clickerGame/Sounds/levelingUp.mp3')

    }
}

function buyFiveWorkers() {
    if (coins >= fiveWorkersPrice) {
        coins = coins - fiveWorkersPrice;
        workers = workers + 5;
        fiveWorkersPrice = fiveWorkersPrice * 10 / 4;
        playAudio('C:/Users/Userr/Desktop/clickerGame/Sounds/hammer.mp3')
    }
}

function buyTenWorkers() {
    if (coins >= tenWorkersPrice) {
        coins = coins - tenWorkersPrice;
        workers = workers + 10;
        tenWorkersPrice = tenWorkersPrice * 10 / 2;
        playAudio('C:/Users/Userr/Desktop/clickerGame/Sounds/hammer.mp3')
    }
}
function buySunsetBackground() {
    if (coins >= 1500) {
        document.body.style.backgroundImage = "url('https://images.wallpapersden.com/image/download/mountains-and-cosmo-planets_bGltamiUmZqaraWkpJRmbmdlrWZlbWU.jpg')";
        coins = coins - 1500;
    }
}

function nextButton1(currentInput) {
    switch (currentInput) {
        case 1:
            document.getElementById("nextButton").innerText = "You have to help us restore this city.";
            break;
        case 2:
            document.getElementById("nextButton").innerText = "Start collecting money and hiring workers to help you build the city."
            break;
        case 3:
            document.getElementById("nextButton").innerText = "You can buy buildings or different skins"
            break
        case 4:
            document.getElementById("nextButton").innerText = "Good luck and remember: 'Great haste makes great waste'"
            break;
        case 5:
            document.getElementById("nextButton").classList.toggle("unvisible");
            document.getElementById("workerImage").classList.toggle("unvisible");
            document.getElementById("nextButton1").classList.toggle("unvisible");
            document.getElementById("finishButton").classList.toggle("visibleElements");

    }
}
function inputAdding(currentInput) {
    currentInput = input++;
    nextButton1(input);
    nextButton1(input);
    nextButton1(input);

}
function nameUser() {
    let person = prompt("Please enter your username", "Your name");
    if (person != null) {
        document.getElementById("demo").innerHTML = "Hello " + " " + person + " " + " good luck";
        document.getElementById("finishButton").style.visibility = "hidden";

    }
}
function playAudio(url) {
    new Audio(url).play();
}

/*function NightLoop() {
    document.body.style.backgroundColor = "black";
}
setInterval(NightLoop,5000)

function dayLoop() {
    document.body.style.backgroundColor = "white";
}
setInterval(dayLoop,10000)
*/

