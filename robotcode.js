let addTime = 500;

function adhdWatch() {
  buttonClicked = false;

  for (let i = 0; i < 10; i++) {
    pause(addTime);

    light.setPixelColor(i, Colors.Red);

    console.log(i);
  }

  light.setBrightness(0);

  // Vloeiend worden de lichtjes feller over een periode van 60 seconden

  for (let i = 0; i < 256; i++) {
    // Lampjes gaan aan

    light.setAll(Colors.White);

    pause(117);

    light.setBrightness(i);

    console.log(i);

    // Controleer of er op knop A is gedrukt

    if (input.buttonA.wasPressed()) {
      light.clear(); // Schakel de lampjes uit

      return; // Stop de functie als er op knop A wordt gedrukt
    }
  }
}
// aan passing
function timer() {
  for (let i = 0; i < 10; i += 2) {
    pause(5000);

    light.setPixelColor(i, Colors.Red);

    console.log(i);
  }
}

let buttonClicked = false;

// Wanneer klikt binnen 60 seconden, lampjes weer uit, code herhaalt

input.buttonA.onEvent(ButtonEvent.Click, function () {
  if (!buttonClicked) {
    buttonClicked = true;

    light.clear(); // Schakel de lampjes uit

    adhdWatch(); // Herstart de code
  }
});

input.buttonB.onEvent(ButtonEvent.Click, function () {
  addTime += 500;
});

// Anders maak irritant geluid tot er wordt geklikt

if (!buttonClicked) {
  music.playTone(262, music.beat(BeatFraction.Whole)); // Voorbeeldgeluid (C)

  // Voeg hier code toe om het irritante geluid te herhalen totdat er wordt geklikt
}

adhdWatch(); // Start de code
