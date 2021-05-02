// function finish_game () {
//     game_started = false
//     basic.showString("Finished!")
//     basic.showIcon(IconNames.Happy)
// }
// function wait_for_teacher () {
//     while (!(countdown_started)) {
//         basic.showString("A")
//     }
//     basic.showString("3 2 1 GO!")
// }
// input.onButtonPressed(Button.A, function () {
//     countdown_started = true
// })

// radio.onReceivedValue(function (name, value) {
//     if (game_started) {
//         serial.writeValue(name, value)
//     }
// })
// function play_game () {
//     game_started = true
//     game_duration = 60
//     for (let index = 0; index <= game_duration; index++) {
//         led.plotBarGraph(
//         index,
//         game_duration
//         )
//         basic.pause(1000)
//     }
// }
// let game_duration = 0
// let game_started = false
// let countdown_started = false
// radio.setGroup(5)
// countdown_started = false
// game_started = false
// wait_for_teacher()
// play_game()
// finish_game()
