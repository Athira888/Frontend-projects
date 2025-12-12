let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
let currentColor = "";
let boxColor = "";
let score = 0;
let level = 1;
let timeLeft = 5;
let timerInterval;
let changeInterval;

$("#start").click(function () {
    resetGame();
    startGame();
});

function resetGame() {
    score = 0;
    level = 1;
    timeLeft = 5;
    $("#score").text(score);
    $("#level").text(level);
    $("#time").text(timeLeft);
    $("#start").text("Start ✔️").show();
    $("#msg").text("Match the color name with the box color!");
}

function startGame() {
    $("#start").hide();
    $("#box").show();
    startTimer();
    changeColor();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        $("#time").text(timeLeft);
        if (timeLeft <= 0) {
            level++;
            $("#level").text(level);
            timeLeft = 5;
        }
    }, 1000);
}

function changeColor() {
    changeInterval = setInterval(() => {
        currentColor = colors[Math.floor(Math.random() * colors.length)];
        
        if (Math.random() < 0.65) {
            boxColor = currentColor;
        } else {
            let diff = colors.filter(c => c !== currentColor);
            boxColor = diff[Math.floor(Math.random() * diff.length)];
        }

        $("#msg").text("Click only if it MATCHES only!  : " + currentColor.toUpperCase());
        $("#box").css("background", boxColor);

    }, 1000);
}

$("#box").click(function () {
    if (currentColor === boxColor) {
        score++;
        $("#score").text(score);
        $("#msg").text("YAYYY thats a point!!");
    } else {
        gameOver();
    }
});

function gameOver() {
    clearInterval(timerInterval);
    clearInterval(changeInterval);
    $("#msg").text('oopsieee GAME OVER :( Your final score is ' + score + '.');
    $("#box").hide();
    $("#start").text("Restart 🔁").show();
    score = 0;
    level = 1;
    timeLeft = 5;
    $("#score").text(score);
    $("#level").text(level);
    $("#time").text(timeLeft);
}
