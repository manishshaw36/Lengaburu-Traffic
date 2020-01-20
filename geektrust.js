const {orbit, vehicle, weather} = require('./constant');
const { getTimeList, getOutput } = require('./functions');

var stdin = process.openStdin();
console.log("\nENTER INPUT IN BELOW FORMAT\n");
console.log("WEATHER ORBIT_1_TRAFFIC_SPEED ORBIT_2_TRAFFIC_SPEED\n");
console.log("NOTE: Enter WEATHER from this List ['SUNNY', 'RAINY', 'WINDY']\n");
console.log("NOTE: ORBIT_1_TRAFFIC_SPEED & ORBIT_2_TRAFFIC_SPEED are numbers must be greater than ZERO\n");

stdin.addListener("data", function(input) {
    input = input.toString().trim().split(' ');
    let selectedWeather = weather[input[0].toUpperCase()];
    if(selectedWeather && Number(input[1]) > 0 && Number(input[2]) > 0) {
        let timeList = getTimeList(orbit, selectedWeather, vehicle, input);
        let output = getOutput(timeList);
        console.log("\x1b[36m", `\n${output.vehicle} ${output.orbit}\n`, "\x1b[37m");
    } else {
        console.log("\x1b[31m", "\nINVALID INPUT TRY AGAIN");
        console.log("\nENTER INPUT IN BELOW FORMAT\n");
        console.log("WEATHER ORBIT_1_TRAFFIC_SPEED ORBIT_2_TRAFFIC_SPEED\n");
        console.log("NOTE: Enter WEATHER from this List ['SUNNY', 'RAINY', 'WINDY']\n");
        console.log("NOTE: ORBIT_1_TRAFFIC_SPEED & ORBIT_2_TRAFFIC_SPEED are numbers must be greater than ZERO\n", "\x1b[37m");
    }
});
