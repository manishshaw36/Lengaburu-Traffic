class Orbit {
    name;
    distance;
    noOfCraters;
    traffic;
    constructor(name, distance, noOfCraters, traffic) {
        this.name = name;
        this.distance = distance;
        this.noOfCraters = noOfCraters;
        this.traffic = traffic;
    }
}

class Weather {
    cratersAffected;
    availableVehicle;
    constructor(cratersAffected, availableVehicle) {
        this.cratersAffected = cratersAffected;
        this.availableVehicle = availableVehicle;
    }
}

class Vehicle {
    priority;
    speed;
    timeTakenToCrossCrater;
    constructor(priority, speed, timeTakenToCrossCrater) {
        this.priority = priority;
        this.speed = speed;
        this.timeTakenToCrossCrater = timeTakenToCrossCrater;
    }
}

module.exports = {
    Orbit,
    Weather,
    Vehicle
}