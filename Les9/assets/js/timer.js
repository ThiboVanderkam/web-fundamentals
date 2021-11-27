var seconds = 0;

var chronometer = setInterval(function() {
    seconds++;


    if (seconds > 69) {
        clearInterval(chronometer)
    }
    else {
        document.querySelector(".js-timer").innerHTML = seconds;
    }
    
}, 100); //milliseconden


setTimeout(function() {
    console.log("5s gewacht")
}, 5000)

