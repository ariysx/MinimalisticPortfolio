function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

document.getElementById("me-img").setAttribute("src", "assets/img/me-apple-" + randomIntFromInterval(1,4) + ".png");