input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P2, 300)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P2, 0)
})
basic.showIcon(IconNames.Heart)
pins.servoWritePin(AnalogPin.P2, 0)
basic.forever(function () {
	
})
