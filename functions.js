const getTimeTakenByVehicle = (orbit, vehicle, cratersAffectedByWeather) => {
    let { distance, noOfCraters, traffic } = orbit;
    let { speed, timeTakenToCrossCrater } = vehicle;
    let totalCraters = noOfCraters + (noOfCraters * cratersAffectedByWeather);
    if(traffic < speed)
        return (((distance/traffic)*60) + (totalCraters*timeTakenToCrossCrater));
    return (((distance/speed)*60)+ (totalCraters*timeTakenToCrossCrater));
}

const getTimeList = (orbit, selectedWeather, vehicle, input) => {
    let result = []
    orbit.forEach((eachOrbit, index) => {
        eachOrbit.traffic = Number(input[index+1]);
        selectedWeather.availableVehicle.forEach((eachVehicle) => {
            vehiclePriority = vehicle[eachVehicle].priority;
            totalTime = getTimeTakenByVehicle(eachOrbit, vehicle[eachVehicle], selectedWeather.cratersAffected);
            result.push({
                vehicle: eachVehicle,
                vehiclePriority,
                orbit: eachOrbit.name,
                timeTaken: Math.round(totalTime * 100) / 100
            });
        })
    });
    return result;
}

const getOutput = (timeList) => {
    var output = timeList[0];
    var temp;
    for (var iLoop = 1; iLoop < timeList.length; iLoop++) {
        temp = timeList[iLoop];
        if (temp.timeTaken < output.timeTaken) output = temp;
        else if (temp.timeTaken === output.timeTaken) {
            if(temp.vehiclePriority < output.vehiclePriority) output = temp;
        }
    }
    return output;
}

module.exports = {
    getTimeList,
    getOutput
}