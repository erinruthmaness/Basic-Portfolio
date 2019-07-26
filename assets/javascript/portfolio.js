var links = {
    project7: {
        name: "Circuitous",
        link: "https://erinruthmaness.github.io/circuitous/",
        img: "assets/images/circuitous.jpg"
    } ,
    project6: {
        name: "Rock Paper Scissors",
        link: "https://erinruthmaness.github.io/rock-paper-scissors/",
        img: "assets/images/rockpaperscissors.jpg",
    },
    project5: {
        name: "GIPHY Grabber",
        link: "https://erinruthmaness.github.io/GIPHY-grabber/",
        img: "assets/images/giphygrabber.jpg",
    },
    project4: {
        name: "Trivia Game",
        link: "https://erinruthmaness.github.io/Trivia-Game/",
        img: "assets/images/trivia.jpg",
    },
    project3: {
        name: "Disco Collector",
        link: "https://erinruthmaness.github.io/disco-collector/",
        img: "assets/images/collector.jpg",
    },
    project2: {
        name: "Word Guess Game",
        link: "https://erinruthmaness.github.io/Word-Guess-Game/",
        img: "assets/images/hangman.jpg",
    },
    project1: {
        name: "Psychic Game",
        link: "https://erinruthmaness.github.io/Psychic-Game/",
        img: "assets/images/psychic.jpg",
    }
}

function addItem(obj) {
    for (var project in obj) {
        var outerDiv = $("<div>").addClass("outer-photoicon");
        var newDiv = $("<div>").addClass("photoicon");
        var newImg = $("<img>").attr("src", obj[project].img);
        newImg.appendTo(newDiv);
        var newLabel = $("<div>").addClass("photobutton");
        var newLink = $("<a>").attr("href", obj[project].link).addClass("thumblink")
        newLink.text(obj[project].name);
        newLink.appendTo(newLabel);
        newDiv.append(newLabel);
        outerDiv.append(newDiv);
        $("#portfolio-links").append(outerDiv);
    }
}

$(document).ready(function() {
    addItem(links);
})