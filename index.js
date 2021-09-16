const paths = ["assets/img/part1/a.png", "assets/img/part1/b.png", "assets/img/part1/c.png", "assets/img/part1/d.png", "assets/img/part1/e.png", "assets/img/part1/f.png", "assets/img/part1/g.png", "assets/img/part1/h.png", "assets/img/part1/i.png", "assets/img/part1/j.png", "assets/img/part1/k.png", "assets/img/part1/l.png"];
const combis = [4,4,4,4,3,3,3,3,2,2,2,2];

const sentences = ["Aoi went out of the house, only to realise that they had forgotten to brought their umbrella.", "Rei did not like math, but they were forced to studies it.", "Wielding a bat, Kimeno walked to the kitchen and steeled themself to faced the enemy."]
const words = ["brought", "studies", "faced"];

var q = 0;
const src = document.getElementById("display");

function stageOne() {
    var img = document.createElement("div");
    img.id = "image";
    const choice = Math.floor(Math.random() * 12);
    img.style.backgroundImage = "url('" + paths[choice] + "')";
    src.appendChild(img);

    var question = document.getElementById("question");
    question.textContent = "How many unique ways can you pair up these people into couples (with the minimum number of unpaired individuals)?";

    var form = document.getElementById("answerSubmit");
    form.addEventListener("submit", function handler(event) {
        event.preventDefault();

        var ans = form.elements.item(0).value;

        if (ans.length == 0) return;

        if (combis[choice] == parseInt(ans, 10)) q++;

        this.removeEventListener("submit", handler);
        stageTwo();
    })
}

function stageTwo() {
    var question = document.getElementById("question");
    var form = document.getElementById("answerSubmit");

    form.elements.item(0).value = "";

    document.getElementById("image").style.display = 'none';
    document.getElementById("answer").type = 'text';
    question.textContent = "Spot the mistake in the above sentence (Type the first word in the sentence that is incorrect).";

    var sentence = document.createElement("p");
    sentence.id = "sentence";
    sentence.classList.add("sentence");

    const choice = Math.floor(Math.random() * sentences.length);
    sentence.textContent = sentences[choice];

    src.appendChild(sentence);
    src.style.width = "500px";

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var ans = form.elements.item(0).value;

        if (ans.length == 0) return;

        if (ans == words[choice]) q++;
        redirect();
    })
}

function redirect() {
    if (q == 2) {
        window.location.replace("http://www.google.com");
    } else {
        window.location.replace("https://sonota.shouharuka.xyz")
    }
}

stageOne();