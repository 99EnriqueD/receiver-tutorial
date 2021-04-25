# Ontvanger beginnerscursus
 
## Welkom
 
Hallo! In deze beginnerscursus gaan we de centrale micro:bit van de leerkracht programmeren. Deze zal het IoTeach spel controleren en data verzamelen van alle teams tijdens het spel. 
 
## Setup 1
 
Eerst gaan we onze radio zend groep juist instellen zodat we naar de juiste micro:bits gaan luisteren.
Wij doen dit door het ``||radio:Radio instellen groep||`` blok te gebruiken.
 
```blocks
radio.setGroup(5)
```
 
## Setup 2
 
Dit zal de centrale micro:bit zijn en dus zal deze controleren wanneer het spel start. Wij willen niet dat het spel meteen start wanneer de micro:bit ingeschakeld wordt. Een countdown zal hiermee helpen. Om dit te realiseren gaan wij twee booleaanse ``||variables:variabelen||`` (``||logic:waar||`` of ``||logic:onwaar||``) gebruiken. Noem deze variabelen ``||variables:countdown_begonnen||`` en ``||variables:spel_begonnen||``.
 
```blocks
radio.setGroup(5)
let countdown_begonnen = false
let spel_begonnen = false
```
 
## Setup 3
 
Om ons programma overzichtelijk te houden gaan wij ``||functions:functie||`` blokken maken. Maak een ``||functions:wacht_voor_start||``, een ``||functions:spel_spelen||``, en een ``||functions:spel_beëindigen||`` functie.
 
```blocks
function wacht_voor_start () {
}
function spel_spelen () {
}
function spel_beëindigen () {
}
```
 
## Setup 4
 
Wij gaan onze functies oproepen in het ``||basic:bij opstarten||`` blok in de juiste volgorde. Kijk hiervoor door de ``||functions:Functies||`` blokken!
 
```blocks
radio.setGroup(5)
let countdown_started = false
let spel_begonnen = false
wacht_voor_start()
spel_spelen()
spel_beëindigen()
 
function wacht_voor_start () {
}
function spel_spelen () {
}
function spel_beëindigen () {
}
```
 
## Pre-countdown 1
 
Wij gaan nu blokken in de ``||functions:wacht_op_start||`` functie toevoegen. 
Hier zullen we ervoor zorgen dat de gebruiker van de micro:bit iets zal moeten doen vooraleer het spel begint.
Dit bericht moet getoond worden totdat de countdown begint.
Gebruik hiervoor een  ``||Loops:while||`` lus en gebruik jouw ``||variables:countdown_begonnen||`` variabel in de conditie.
 
 
```blocks
function wacht_op_start  () {
    while (!(countdown_begonnen)) {
    }
}
```
 
## Pre-countdown 2
 
Nu gaan wij binnen de ``||Loops:while||`` lus een bericht tonen dat vertelt hoe dat het spel gestart moet worden.
De gebruiker van jouw micro:bit zal de leerkracht zijn maar die heeft niets van de micro:bit geprogrammeerd dus deze stap is belangrijk zodat zij/hij weet wat ze moeten doen!
Wij willen dat het spel begint door op de "A" knop te drukken. Gebruik hiervoor het ``||basic:toon tekens||`` blok.
 
```blocks
function wacht_op_start () {
    while (!(countdown_begonnen)) {
        basic.showString("A")
    }
}
```
 
## Pre-countdown 3
 
De micro:bit moet nu weten wat te doen wanneer de gebruiker op de "A" knop drukt. 
Hiervoor voegen we een nieuw blok toe, ``||input:wanneer knop A wordt ingedrukt||``.
 
```blocks
input.onButtonPressed(Button.A, function () {
})
```
 
## Pre-countdown 4
 
In het  ``||input:wanneer knop A wordt ingedrukt||`` blok moeten we er nu voor zorgen dat de countdown begint.
Hoe doen we dat weer? Denk terug naar de ``||variables:countdown_begonnen||`` variabele die we in het begin van deze les gemaakt hadden...
 
```blocks
input.onButtonPressed(Button.A, function () {
    countdown_begonnen = true
})
```
 
## Pre-countdown 5
 
Nu kunnen we de ``||functions:wacht_voor_start||`` functie afmaken.
Eens dat de ``||variables:countdown_started||`` variabele ``||logic:waar||`` is, zal de ``||Loops:while||`` lus stoppen.
Daarom kunnen we na de ``||Loops:while||`` lus de countdown tonen. Gebruik hiervoor het ``||basic:toon tekens||`` blok.
Bekijk gerust de hint als je vast zit!
 
```blocks
function wait_voor_start () {
    while (!(countdown_begonnen)) {
        basic.showString("A")
    }
    basic.showString("3 2 1 GO!")
}
```
 
## Gameplay 1
 
Nu kunnen we beginnen aan de "start_spel" functie. Deze functie zal het spel officieel laten beginnen. 
Hoe zeggen we dit in het programma? Denk terug naar de ``||variables:spel_begonnen||`` variabele die we in het begin van deze les gemaakt hebben...
 
 
```blocks
function spel_spelen () {
    spel_begonnen = true
}
```
 
## Gameplay 2
 
Het spel is nu begonnen en zal een minuut lang duren. Wij gaan nu een ``||Loops:for||`` lus gebruiken die zijn eigen ``||variables:index||`` variabele heeft. Deze ``||variables:index||`` variabele moet de duur van het spel laten zien. Hoeveel seconden zitten er weer in een minuut?
 
```blocks
function spel_spelen () {
    spel_begonnen = true
    for (let index = 0; index <= 60; index++) {
    }
}
```
 
## Gameplay 3
 
Om ervoor te zorgen dat de ``||Loops:for||`` lus maar een keer per seconde loopt moeten we een pauze van een seconde inlassen. Anders zal het spel veel minder dan een minuut lopen omdat de micro:bit veel sneller de lus zal overlopen! Het ``||basic:pauzeer||`` blok zal het spel pauzeren voor een aantal milliseconden (``ms``), hoeveel milliseconden zitten er ook weer in een seconde?
```blocks
function spel_spelen () {
    spel_begonnen = true
    for (let index = 0; index <= 60; index++) {
        basic.pause(1000)
    }
}
```
 
## Gameplay 4
 
Het zou handig zijn moest de micro:bit ons kunnen vertellen hoe lang het spel nog zal duren.
Hiervoor kunnen wij het ``||led: plot staafdiagram||`` blok gebruiken. 
Denk goed na over welke waarden we in dit blok gaan plaatsen. 
Zet deze in de ``||Loops:for||`` lus. 
 
 
```blocks
function spel_spelen () {
    spel_begonnen = true
    for (let index = 0; index <= 60; index++) {
        led.plotBarGraph(
        index,
        60
        )
        basic.pause(1000)
    }
}
```
 
## Eindspel 1
 
Nadat de ``||Loops:for||`` lus klaar is in de ``||functions:spel_spelen||`` functie zal de ``||functions:spel_eindigen||`` functie opgeroepen worden.
Ik geloof dat je dit blok helemaal alleen kunt programmeren! 
Je moet hier een variabele aanpassen om ervoor te zorgen dat het programma weet dat het spel geëindigd is en een bericht tonen aan de gebruiker dat het spel geëindigd is.
Bekijk gerust de hint als je vast zit.
 
```blocks
function spel_eindigen () {
    spel_begonnen = false
    basic.showString("Finished!")
    basic.showIcon(IconNames.Happy)
}
```
 
## Eindspel 2
 
Test jouw programma. 
Druk op de "A" knop op de virtuele of echte micro:bit en controleer dat je programma doet wat het zou moeten doen.
Als iets onverwacht gebeurt, probeer dan het probleem zelf op te lossen of vraag de leerkracht om hulp.
Maak je geen zorgen, dit hoort bij programmeren!
 
## Eindspel 3
 
We zijn bijna klaar!
De micro:bit moet weten wat te doen wanneer het radio-uitzendingen krijgt van de andere micro:bits tijdens het spel.
Laten we een nieuwe ``||radio:wanneer de radio ontvangt||`` ``||variables:name||`` ``||variables:value||`` blok toevoegen.
 
```blocks
radio.onReceivedValue(function (name, value) {
})
```
 
## Endgame 4 
 
De ``||radio:wanneer de radio ontvangt||`` blok wacht op radio-uitzendingen van de radio groep die we in het begin ingesteld hebben. Eigenlijk moeten wij enkel code uitvoeren wanneer het spel gestart is.
Voeg een ``||logic:if||`` blok toe met een gepaste voorwaarde.
 
```blocks
radio.onReceivedValue(function (name, value) {
    if (spel_begonnen) {
    }
})
```
 
## Endgame 5
 
Het allerlaatste dat jij nog moet doen is de data van de verschillende micro:bits opslaan wanneer we die ontvangen.
Gebruik het ``||serial:serieel schrijf waarde||`` blok hiervoor. Die zal alle waardes die het krijgt opslaan en in een grafiek zetten!
Vergeet niet dat de ``||variables:name||`` en ``||variables:value||`` variabelen van het ``||radio:wanneer de radio ontvangt||`` blok gesleept kunnen worden.
 
```blocks
radio.onReceivedValue(function (name, value) {
    if (spel_begonnen) {
        serial.writeValue(name, value)
    }
})
```
 
## Klaar
 
Nu zijn we klaar met het programmeren van de centrale micro:bit van het spel. Fantastisch werk!
Ik kijk uit naar de programmeer cursus van de studenten micro:bit die jij [hier](https://makecode.microbit.org/#tutorial:github:99enriqued/sender-tutorial/tutorial) kan maken!
 
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
