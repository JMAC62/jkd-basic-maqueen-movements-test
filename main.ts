function Forward () {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, Speed)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, Speed)
}
function Backward () {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, Speed)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, Speed)
}
let Speed = 0
maqueen.motorStopAll()
Speed = 255
basic.showNumber(3)
basic.pause(200)
basic.showNumber(2)
basic.pause(200)
basic.showNumber(1)
basic.pause(200)
basic.showIcon(IconNames.Chessboard)
basic.pause(200)
for (let index = 0; index < 4; index++) {
    Forward()
    basic.pause(1000)
    Backward()
    basic.pause(1000)
    basic.pause(1000)
    basic.showString("Done!")
}
