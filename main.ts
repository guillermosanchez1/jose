radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        HelloBot.CarCtrl(HelloBot.CarState.Car_Run)
    } else if (receivedNumber == 2) {
        HelloBot.CarCtrl(HelloBot.CarState.Car_Back)
    } else if (receivedNumber == 3) {
        HelloBot.CarCtrl(HelloBot.CarState.Car_Left)
    } else if (receivedNumber == 4) {
        HelloBot.CarCtrl(HelloBot.CarState.Car_Right)
    } else if (receivedNumber == 5) {
        HelloBot.CarCtrl(HelloBot.CarState.Car_Stop)
    } else if (receivedNumber == 6) {
        HelloBot.Servo_Car(HelloBot.enServo.S1, 0)
        HelloBot.Servo_Car(HelloBot.enServo.S2, 180)
        basic.pause(100)
        HelloBot.Servo_Car(HelloBot.enServo.S1, 180)
        HelloBot.Servo_Car(HelloBot.enServo.S2, 0)
    }
})
if (HelloBot.Ultrasonic_Car() > 30) {
    HelloBot.CarCtrlSpeed(HelloBot.CarState.Car_Run, 90)
    basic.showIcon(IconNames.Yes)
} else {
    HelloBot.CarCtrlSpeed(HelloBot.CarState.Car_Left, 90)
    basic.showIcon(IconNames.Square)
}
