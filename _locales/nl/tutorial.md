# Ontvanger begginerscursus

## Welkom

Hallo! In deze begginerscursus gaan wij de centrale micro:bit programmeren. Deze zal data collecteren van alle studenten teams tijdens het IoTeach spel.

## Setup 1

Eerst gaan we onze radio zend groep juist instellen zodat wij naar de juiste micro:bits gaan luisteren.
Wij doen dit door de ``||radio:Radio instellen groep||`` te gebruiken.

```blocks
radio.setGroup(5)
```

## Setup 2

Dit zal de centrale micro:bit zijn en dus zal deze controleren wanneer het spel start. Wij willen niet dat het spel direct start wanneer de micro:bit ingeschakelt wordt. Een countdown zal hiermee helpen. Om dit te realiseren gaan wij twee booleaanse ``||variables:variabelen||`` (``||logic:waar||`` of ``||logic:onwaar||``) gebruiken. Noem deze variabelen ``||variables:countdown_begonnen||`` en ``||variables:spel_begonnen||``.

```blocks
radio.setGroup(5)
let countdown_begonnen = false
let spel_begonnen = false
```

## Setup 3

Om ons programma overzichtelijk te houden gaan wij ``||functions:functie||`` blokken maken. Maak een ``||functions:wacht_voor_start||``, een ``||functions:spel_spelen||``, en een ``||functions:spel_eindigen||`` functie.

```blocks
function wacht_voor_start () {
}
function spel_spelen () {
}
function spel_eindigen () {
}
```

## Setup 4

Wij gaan onze functies oproepen in de ``||basic:bij opstarten||`` blok in de juiste volgorde. Kijk hiervoor door de ``||functions:Functies||`` blokken!

```blocks
radio.setGroup(5)
let countdown_started = false
let spel_begonnen = false
wacht_voor_start()
spel_spelen()
spel_eindigen()

function wacht_voor_start () {
}
function spel_spelen () {
}
function spel_eindigen () {
}
```

## Pre-countdown 1

Wij gaan nu blokken in de ``||functions:wacht_voor_start||`` functie toevoegen. 
Hier zullen we de gebruiker van de micro:bit dat ze iets moeten doen vooraleer het spel begint.
Dit bericht moet getoont worden totdat de countdown begint.
Gebruik hiervoor een  ``||Loops:while||`` lus en gebruik jouw ``||variables:countdown_begonnen||`` variabel in de conditie.


```blocks
function wacht_voor_start  () {
    while (!(countdown_begonnen)) {
    }
}
```

## Pre-countdown 2

Nu gaan wij binnen de ``||Loops:while||`` lus een bericht tonen die vertelt hoe dat het spel gestart moet worden.
De gebruiker van jouw micro:bit zal de leerkracht zijn maar die heeft niets van de micro:bit geprogrammeerd dus deze stap is belangrijk zodat zij/hij weet wat dat ze moeten doen!
Wij willen dat het spel begint door op de "A" knop te drukken. Gebruik hiervoor de ``||basic:toon tekens||`` blok.

```blocks
function wait_voor_start () {
    while (!(countdown_begonnen)) {
        basic.showString("A")
    }
}
```

## Pre-countdown 3

De micro:bit moet nu weten wat te doen wanneer de gebruiker op de "A" knop drukt. 
Om hieraan te beginnen voegen we een nieuw blok toe, ``||input:wanneer knop A wordt ingedruk||``.

```blocks
input.onButtonPressed(Button.A, function () {
})
```

## Pre-countdown 4

In de  ``||input:wanneer knop A wordt ingedruk||`` blok moeten wij nu ervoor zorgen dat de countdown begint.
Hoe doen wij dat juist? Denk terug naar de ``||variables:countdown_begonnen||`` variabel die we in het begin van deze les gemaakt hadden...

```blocks
input.onButtonPressed(Button.A, function () {
    countdown_begonnen = true
})
```

## Pre-countdown 5

Nu kunnen wij de ``||functions:wacht_voor_start||`` functie afmaken.
Eens dat de ``||variables:countdown_started||`` variabel ``||logic:waar||`` is, zal de ``||Loops:while||`` lus stoppen.
Daarom kunnen wij na de ``||Loops:while||`` lus de countdown tonen. Gebruik hiervoor de ``||basic:toon tekens||`` blok.
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

Nu kunnen wij beginnen aan onze de "start_spel" functie. Binnen deze functie zal het spel officieel beginnen. 
Hoe kunnen we dit zeggen in de programma? Denk terug naar de ``||variables:spel_begonnen||`` variabel die we in het begin van deze les gemaakt hadden...


```blocks
function spel_spelen () {
    spel_begonnen = true
}
```

## Gameplay 2

Het spel is nu begonnen en zal een minuut lang duren. Wij gaan nu een ``||Loops:for||`` lus gebruiken die zijn eigen ``||variables:index||`` variabel heeft. Deze ``||variables:index||`` variabel moet de aantal seconden van het spel representeren. Hoeveel seconden zijn er in een minuut alweer?

```blocks
function spel_spelen () {
    spel_begonnen = true
    for (let index = 0; index <= 60; index++) {
    }
}
```

## Gameplay 3

Om ervoor te zorgen dat de ``||Loops:for||`` lus een keer elke seconde itereert moeten wij het programma pauzeren voor een seconde.
Anders zal het spel veel minder dan een minuut bezig zijn omdat de micro:bit zo snel mogelijk door de lus zal itereren! De ``||basic:pauzeer||`` blok zal het spel pauzeren voor een aantal miliseconden (``ms``), wat betekent dat eigenlijk?

```blocks
function spel_spelen () {
    spel_begonnen = true
    for (let index = 0; index <= 60; index++) {
        basic.pause(1000)
    }
}
```

## Gameplay 4

Het zal handig zijn als de micro:bit ons kan vertellen hoe lang het spel nog zal duren.
Hiervoor kunnen wij de ``||led: plot staafdiagram||`` blok gebruiken. 
Denk er goed over na welke waarden in deze blok te plaatsen. 
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
Ik geloof dat je deze blok helemaal alleen kan programmeren! 
Je moet hier een variabel aanpassen om ervoor te zorgen dat de programma weet dat het spel geeindigd is en dan een bericht tonen naar de gebruiker van de micro:bit.
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
Druk op de "A" knop op de virtuele of echte micro:bit en controleer als je programma doet wat het zou moet doen.
Als iets onverwacht gebeurt, probeer het probleem op te lossen of vraag de leerkracht voor hulp.
Geen zorgen maken, dit hoort bij programmeren!

## Eindspel 3

Zijn we klaar? Bijna!
De micro:bit moet weten wat te doen wanneer die radio-uitzendingen krijgt van de andere micro:bits tijdens het spel.
Laten we een nieuwe ``||radio:wanneer de radio ontvangt||`` ``||variables:name||`` ``||variables:value||`` blok toevoegen.

```blocks
radio.onReceivedValue(function (name, value) {
})
```

## Endgame 4 

De ``||radio:wanneer de radio ontvangt||`` blok luistert constant voor radio-uitzendingen van de radio groep die we in het begin ingestelled hebben. Eigenlijk moeten wij enkel code uitvoeren wanneer het spel gestart is.
Voeg een ``||logic:if||`` blok toe met een gepaste conditie.

```blocks
radio.onReceivedValue(function (name, value) {
    if (spel_begonnen) {
    }
})
```

## Endgame 5

Het allerlaatste dat jij nog moet doen is data van de verschillende micro:bits opslaan wanneer wij die ontvangen.
Gebruik de ``||serial:serieel schrijf waarde||`` blok hiervoor. Die zal alle waardes die het krijgt opslaan en plotten!
Vergeet niet dat de ``||variables:name||`` en ``||variables:value||`` variabelen van de ``||radio:wanneer de radio ontvangt||`` blok gesleept kunnen worden.

```blocks
radio.onReceivedValue(function (name, value) {
    if (spel_begonnen) {
        serial.writeValue(name, value)
    }
})
```

## Klaar

Nu zijn we klaar met het programmeren van de centrale micro:bit van het spel. Sterk gewerkt!
Ik kijk uit naar de programmeer cursus van de studenten micro:bit die jij [hier](https://makecode.microbit.org/#tutorial:github:99enriqued/sender-tutorial/tutorial) kan volgen!

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>







