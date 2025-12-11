$("#chicken").click(function() {
    $("#msg").text("HOW DARE YOU SLAP ME!! 😡");
    jump();
});

function jump() {
    let x = Math.random()*80+"%";
    let y = Math.random()*80+"%";
    $("#chicken").css({position: "absolute", top: y, left: x});
    taunt();
}
function taunt() {
    let lines=[
        "LMAO THAT AINT A SLAP 💀",
        "You got such weak ahh hands",
        "Is that all you got?",
        "Imma beat you up dawg",
        "That was like an ant slapping",
        "Try harder 👴🏿👵🏿",
        "bwahahah I'm stronger than you",
    ];
    let r =Math.floor(Math.random()*lines.length);
    $("#msg").text(lines[r]);
    
}
jump();