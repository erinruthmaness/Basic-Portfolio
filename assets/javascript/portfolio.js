var links = {
    project9: {
        name: "Node Word Guess",
        link: "https://github.com/erinruthmaness/node-wordguess",
        img: "assets/images/9-wordguess.gif",
    },
    project8: {
        name: "LIRI Node App",
        link: "https://github.com/erinruthmaness/liri-node-app/",
        img: "assets/images/8-liri.gif",
    },
    project7: {
        name: "Circuitous",
        link: "https://erinruthmaness.github.io/circuitous/",
        img: "assets/images/7-circuitous.jpg",
    } ,
    project6: {
        name: "Rock Paper Scissors",
        link: "https://erinruthmaness.github.io/rock-paper-scissors/",
        img: "assets/images/6-rockpaperscissors.jpg",
    },
    project5: {
        name: "GIPHY Grabber",
        link: "https://erinruthmaness.github.io/GIPHY-grabber/",
        img: "assets/images/5-giphygrabber.jpg",
    },
    project4: {
        name: "Trivia Game",
        link: "https://erinruthmaness.github.io/Trivia-Game/",
        img: "assets/images/4-trivia.jpg",
    },
    project3: {
        name: "Disco Collector",
        link: "https://erinruthmaness.github.io/disco-collector/",
        img: "assets/images/3-collector.jpg",
    },
    project2: {
        name: "Word Guess Game",
        link: "https://erinruthmaness.github.io/Word-Guess-Game/",
        img: "assets/images/2-hangman.jpg",
    },
    project1: {
        name: "Psychic Game",
        link: "https://erinruthmaness.github.io/Psychic-Game/",
        img: "assets/images/1-psychic.jpg",
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