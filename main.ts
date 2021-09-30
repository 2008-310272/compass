input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() >= 0 || input.compassHeading() <= 45) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() > 46 && input.compassHeading() <= 90) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (input.compassHeading() > 91 && input.compassHeading() <= 135) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() > 136 && input.compassHeading() <= 180) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.compassHeading() > 181 && input.compassHeading() <= 225) {
        basic.showArrow(ArrowNames.South)
    } else if (input.compassHeading() > 226 && input.compassHeading() <= 270) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (input.compassHeading() > 271 && input.compassHeading() <= 314) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
