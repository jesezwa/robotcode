// variabele voor bijhouden tijd en veranderen van

let lightTimer = 500;
let timeCounter = 0;
// let i = 0; 


// functie die lampjes laat branden
function timer() {
    for (let i = 0; i <= 10; i++) {
        pause(lightTimer);
        light.setPixelColor(i, Colors.Red);
        timeCounter++;
        console.log(timeCounter);
    }
    waitingTime()
}

timer()


function waitingTime() {
    if (timeCounter === 11) {
        console.log("tijd");
        light.clear();
        timeCounter = 0;
        light.setBrightness(0)
        light.setAll(Colors.White)
        for (let i = 240; i < 256; i++) {
            pause(117)
            light.setBrightness(i);
            console.log(i)
            timeCounter++;

            if (input.buttonA.isPressed()) {
                light.clear()
                i = 256;
                timeCounter = 0;
                timer()
            }

        }
    } toLate()
}

function toLate() {
    music.baDing.loop()

function toLate() {
    music.baDing.loop()

   input.buttonA.onEvent(ButtonEvent.Click, function () {
       
           console.log('if')
           light.clear()
           timeCounter = 0;
           music.stopAllSounds()
           timer()
      
   })

}

}
