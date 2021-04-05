# Receiver tutorial

## Welcome

Hello! In this lesson we will be programming the central micro:bits which will collect data from all students teams during the challenge. 
If you have not yet followed the student/sender tutorial, do so [here](https://makecode.microbit.org/#tutorial:github:99enriqued/sender-tutorial/tutorial).
This tutorial is a little more advanced but I'm sure you can do it! Be sure to ask your teacher if you get stuck.

## Setup 1

First, we need to set our radio group correctly so that we are listening to the right micro:bits. 
As you probably remember, we do this with the ``||radio:radio set group||`` block.

```blocks
radio.setGroup(5)
```

## Setup 2

Since this is the central micro:bit, it controls when the game starts.
We don't want the game to start right away when the micro:bit turns on. 
We want a countdown so that the game starts fairly. 

To do this we need two ``||logic:boolean||`` (do you remember what this means?) ``||variables:variables||``.
We will name these variables ``||variables:countdown_started||`` (which is ``||logic:true||`` after the teacher has started the game countdown) and ``||variables:game_started||`` (``||logic:true||`` when the game has actually started).

```blocks
radio.setGroup(5)
let countdown_started = false
let game_started = false

```

## Setup 3

Before we program anymore, let's first make some ``||functions:functions||`` to seperate our code blocks so that our program is easier to understand.
Make a "wait_for_teacher", a "play_game", and a "finish_game" function.

```blocks
function wait_for_teacher () {
}
function play_game () {
}
function finish_game () {
}
```

## Setup 4 

Now call these functions in the ``||basic:on start||`` block in the right order.
Look for this in the ``||functions:Functions||`` blocks after you have created the functions!


## Pre-countdown 1

Let us start by adding blocks to the "wait_for_teacher" function. 
Here we will tell the teacher that they need to do something to officially start the game.
This message must be repeated until it the countdown is started. 
Use a ``||Loops:while||`` loop and use your ``||variables:countdown_started||`` variable as the condition.

```blocks
function wait_for_teacher () {
    while (!(countdown_started)) {
    }
}
```

## Pre-countdown 2

Now in this ``||Loops:while||`` loop we will have the micro:bit display a string message that let's the teacher know how to start the game.
Otherwise they won't know what to do since they didn't program the micro:bit! Let's have the game start when the teacher presses the A and B button at the same time.

```blocks
function wait_for_teacher () {
    while (!(countdown_started)) {
        basic.showString("Start: A+B")
    }
}
```

## Pre-countdown 3

Before we move on, the micro:bit must now know what to do when the teacher presses the A and B buttons.
We do this by making a new ``||input:on button pressed||`` block of code. Change the button to listen to from ``||input:A||`` to ``||input:A+B||``.

```blocks
input.onButtonPressed(Button.AB, function () {
})
```

## Pre-countdown 4

In this ``||input:on button A+B pressed||`` block we now need to tell the program that the countdown should start.
How can we do this? Think back to the ``||variables:countdown_started||`` variable we made at the start of the lesson...

```blocks
input.onButtonPressed(Button.AB, function () {
    countdown_started = true
})
```

## Gameplay 1

We are now ready to add blocks to the "play_game" function.
We can perform the countdown easily by showing a string message.
Go ahead now and try to start the game in your virtual micro:bit!

```blocks
function play_game () {
    basic.showString("3 2 1 GO!")
}
```

## Gameplay 2

After this countdown the game has officially started. How can we show this in the program?
Think back to the ``||variables:game_started||`` variable we made at the start of the lesson...

```blocks
function play_game () {
    basic.showString("3 2 1 GO!")
    game_started = true
}
```

## Gameplay 3

The game has started and should last one minute. 
We will make a ``||Loops:for||`` loop which has its own ``||variables:index||`` variable. 
This ``||variables:index||`` variable will represent how many seconds the game has been going for.
How many seconds are in a minute?

```blocks
function play_game () {
    basic.showString("3 2 1 GO!")
    game_started = true
    for (let index = 0; index <= 60; index++) {
    }
}
```

## Gameplay 4

To make the ``||Loops:for||`` loop repeat once every second, we need to ``||basic:pause||`` the program for a second. 
Otherwise the micro:bit repeat the loop as fast as it can which is a lot faster than one repition every second! 
The ``||basic:pause||`` will pause for a certain amount of ``ms``, what does this mean?

```blocks
function play_game () {
    basic.showString("3 2 1 GO!")
    game_started = true
    for (let index = 0; index <= 60; index++) {
        basic.pause(1000)
    }
}
```

## Gameplay 5

Let's have the teacher's micro:bit show how close to the end of the game we are.
We'll do this by using a ``||led:plot bar graph||`` like we did in the lesson about our own micro:bits.

```blocks
function play_game () {
    basic.showString("3 2 1 GO!")
    game_started = true
    for (let index = 0; index <= 60; index++) {
        led.plotBarGraph(
        index,
        60
        )
        basic.pause(1000)
    }
}
```

## Endgame 1

After the ``||Loops:for||`` loop in the "play_game" function is finished, the "finish_game" function will be called.
This function should end the game. I believe in you to make this function yourself. 
You should signal to the program that the game has finished by using the right variables and show a message to let the teacher know the game has finished.
Check the hint if you are stuck.

```blocks
function finish_game () {
    game_started = false
    basic.showString("Finished!")
    basic.showIcon(IconNames.Happy)
}
```

## Endgame 2

Test your program. 
Press the A and B buttons on your real or virtual micro:bit at the same time and check that the program does all things you have told it to do.
If something doesn't go right, try to find the problem in your program or ask the teacher. 
Finding these problems is called "debugging". Professional programmers also make mistakes and need to debug need to do it all the time so don't be discouraged!

## Endgame 3

Are we all done? So close! We forgot to listen for the radio transmissions of the student micro:bits.
Let's add a ``||radio:on radio received||`` ``||variables:name||`` ``||variables:value||``  block.

```blocks
radio.onReceivedValue(function (name, value) {
})
```

## Endgame 4

The ``||radio:on radio received name value||`` block is always listening for radio transmissions on the radio group we set at the start of the lesson.
Do we want to listen the whole time or only when the game has started? Let's add an ``||logic:if||`` block. Which condition should we use?

```blocks
radio.onReceivedValue(function (name, value) {
    if (game_started) {
    }
})
```

## Endgame 5

The last thing we need to do is record the measurements of each team. 
For now you should just look at the hint and place the code in your program. 
You will discover what this does after the challenge is done.
Hopefully you're as excited as I am! But for now, you're all done. Great job!

```blocks
radio.onReceivedValue(function (name, value) {
    if (game_started) {
        graph_id = "a." + name
        serial.writeValue(graph_id, value)
    }
})
```

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

