function solve (num, num1, num2) {

    let stepsNum = num;
    let stepMeter = num1;
    let speed = num2;

    let totalStepsMeter = num*num1;
    let breakMinutes = Math.floor(totalStepsMeter/500);
    let speedPerSec = (num2*1000)/3600;
    let pathTimeSec =  totalStepsMeter/speedPerSec;

    let hours = Math.floor(pathTimeSec/3600)>10?Math.floor(pathTimeSec/3600):`0${Math.floor(pathTimeSec/3600)}`;
    pathTimeSec %= 3600;
    let minutes = (Math.floor(pathTimeSec/60) + breakMinutes)>10?(Math.floor(pathTimeSec/60) + breakMinutes):`0${(Math.floor(pathTimeSec/60) + breakMinutes)}`;
    let seconds = Math.round(pathTimeSec%60)>10?Math.round(pathTimeSec%60):`0${Math.round(pathTimeSec%60)}`;

    
    console.log(`${hours}:${minutes}:${seconds}`);
    
}

solve(4000, 1, 5);