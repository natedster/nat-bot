input.onButtonPressed(Button.A, function () {
    while (Kitronik_Move_Motor.measure() > 9) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    }
    Kitronik_Move_Motor.stop()
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.stop()
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("G B A G C5 D A C ", 120)
    basic.showString("" + (music.volume()))
    basic.clearScreen()
})
if (true) {
    basic.showString("Play a song.")
}
basic.forever(function () {
    Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
    basic.showString("" + (Kitronik_Move_Motor.measure()))
})
