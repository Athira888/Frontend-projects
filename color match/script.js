$(function () {
    let colors = ["red", "blue", "green", "purple", "orange", "yellow"];
    let level = 0;
    let score = 0;
    let timer;
    let timeLeft;
    let targetColor;
    let boxColor;

    function newLevel() {
        level++;
        $("#level").text(level);

        timeLeft = 4 - Math.min(level * 0.3, 2.5);
        $("#time").text(timeLeft.toFixed(1));

        targetColor = colors[Math.floor(Math.random() * colors.length)];
        $("#msg").text("Click only if color = " + targetColor.toUpperCase());

        if (Math.random() < 0.5) {
            boxColor = targetColor;
        } else {
            boxColor = colors.filter(c => c !== targetColor)[
                Math.floor(Math.random() * (colors.length - 1))
            ];
        }

        $("#box").css("background", boxColor).hide().fadeIn();

        $("#box").off().click(function () {
            if (boxColor === targetColor) {
                score++;
                $("#score").text(score);
                $("#msg").text("✅Correct! Next Level yayyyy!!");

                $(this).slideUp();
                clearInterval(timer);

                setTimeout(newLevel, 700);
            } else {
                $("#msg").text("❌ Color! Game Over :(");
                $("#box").fadeOut();
                clearInterval(timer);
            }
        });

        timer = setInterval(() => {
    timeLeft -= 0.1;

    
    if (timeLeft <= 0) {
        timeLeft = 0; 
        $('#time').text(timeLeft.toFixed(1));

        clearInterval(timer);
        $("#msg").text("⏰Time's Up! Game Over.");
        $("#box").fadeOut();
        return; 
    }

    $('#time').text(timeLeft.toFixed(1));
    }, 100);
    }

    
    $("#start").click(function () {
        level = 0;
        score = 0;
        $("#score").text(0);

        $("#msg").text("GET SET GOOOOOO!!");
        $(this).html("Restart");

        setTimeout(newLevel, 600);
    });
    

});