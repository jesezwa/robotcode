// Variabele voor het instellen van de timerduur voor het activeren van de lichten (in milliseconden), hiermee bepalen we ook de totale tijd van de timer
let lightTimer = 500;
// Variabele voor het tellen en onthouden hoever we zijn
let timeCounter = 0;

// Functie om de lichten te activeren
function timer() {
    // Loopt door de lichten van 0 tot 10
    for (let i = 0; i <= 10; i++) {
        // Pauzeer voor 'lightTimer' milliseconden voordat het volgende licht wordt geactiveerd
        pause(lightTimer);
        // Zet het i licht op rood
        light.setPixelColor(i, Colors.Red);
        // Verhoog de tijdsteller
        timeCounter++;
        // Log de tijdsteller naar de console
        console.log(timeCounter);
    }
    // Roep de functie aan om de wachttijd in te schakelen
    waitingTime();
}



// Functie om te wachten nadat alle lichten zijn geactiveerd
function waitingTime() {
    // Controleer of de tijdsteller 11 is
    if (timeCounter === 11) {
        console.log("tijd");
        // Maak alle lichten leeg
        light.clear();
        // Reset de tijdsteller
        timeCounter = 0;
        // Zet de helderheid van alle lichten op 0 en verander de kleur naar wit
        light.setBrightness(0);
        light.setAll(Colors.White);
        // Loop door de helderheidsniveaus 
        for (let i = 240; i < 256; i++) {
            // Pauzeer voor 117 milliseconden
            pause(117);
            // Zet de helderheid van alle lichten naar het huidige niveau (i)
            light.setBrightness(i);
            console.log(i);
            // Verhoog de tijdsteller
            timeCounter++;

            // Controleer of knop A is ingedrukt
            if (input.buttonA.isPressed()) {
                // Maak alle lichten leeg
                light.clear();
                // Reset de tijdsteller en de loopvariabele (i)
                i = 256;
                timeCounter = 0;
                // Roep de timerfunctie opnieuw aan om het programma te herstarten
                timer();
            }
        }
    }
    // Roep de functie om aan te geven dat er te laat is gereageerd
    toLate();
}

// Functie om te laten zien dat er te laat is gereageerd
function toLate() {
    // Speel een geluid af (continu) wanneer er te laat is gereageerd
    music.baDing.loop();

    // Voer de functie uit wanneer knop A wordt ingedrukt
    input.buttonA.onEvent(ButtonEvent.Click, function () {
        // Maak alle lichten leeg
        light.clear();
        // Reset de tijdsteller
        timeCounter = 0;
        // Stop met het afspelen van alle geluiden
        music.stopAllSounds();
        // Roep de timerfunctie opnieuw aan om het programma te herstarten
        timer();
    });
}

// Roep de timerfunctie aan om het programma te starten
timer();

