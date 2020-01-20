const { Orbit, Weather, Vehicle } = require('./model');

const orbit = [
    new Orbit("ORBIT1", 18, 20, null),
    new Orbit("ORBIT2", 20, 10, null)
]

const weather = {
    SUNNY: new Weather(-0.1, [
        "BIKE",
        "CAR",
        "TUKTUK"
    ]),
    RAINY: new Weather(0.2, [
        "CAR",
        "TUKTUK"
    ]),
    WINDY: new Weather(0, [
        "BIKE",
        "CAR"
    ])
}

const vehicle = {
    BIKE: new Vehicle(0, 10, 2),
    TUKTUK: new Vehicle(1, 12, 1),
    CAR: new Vehicle(2, 20, 3)
}

module.exports = {
    orbit,
    weather,
    vehicle
}