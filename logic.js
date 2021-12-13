var coins = 0;
var workers = 0;
var workerPrice = 10;
var countUpdates = 0;
var giveMoney = 1;
var updatePrice = 14;
var fiveWorkersPrice = 45;
var tenWorkersPrice = 80;
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
    }
}

function buyFiveWorkers() {
    if (coins >= fiveWorkersPrice) {
        coins = coins - fiveWorkersPrice;
        workers = workers + 5;
        fiveWorkersPrice = fiveWorkersPrice * 10 / 4;
    }
}

function buyTenWorkers() {
    if (coins >= tenWorkersPrice) {
        coins = coins - tenWorkersPrice;
        workers = workers + 10;
        tenWorkersPrice = tenWorkersPrice * 10 / 2;
    }
}
function buySunsetBackground() {
    if (coins >= 1500) {
        document.body.style.backgroundImage = "url('https://images.wallpapersden.com/image/download/mountains-and-cosmo-planets_bGltamiUmZqaraWkpJRmbmdlrWZlbWU.jpg')";
        coins = coins - 1500;
    }
}
/*function NightLoop() {
    document.body.style.backgroundColor = "black";
}
setInterval(NightLoop,5000)

function dayLoop() {
    document.body.style.backgroundColor = "white";
}
setInterval(dayLoop,10000)*/

