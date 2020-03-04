function solve(arr) {
    let drive = [...arr];
    let [speed, place] = drive;

    let speedAlerts = (limit, current) => {
        let overLimit = current-limit;
        if (overLimit>=1 && overLimit<=20) {
            console.log('speeding');
        } else if (overLimit>=21&&overLimit<=40){
            console.log('excessive speeding');
        } else if (overLimit >=41) {
            console.log('reckless driving');
        }
    }

    switch (place) {

        case 'city':
            speedAlerts(50,speed);
            break;
        case 'residential':
            speedAlerts(20,speed);
            break;
        case 'interstate':
            speedAlerts(90,speed);
            break;
        case 'motorway':
            speedAlerts(130,speed);
            break;
            default:
    }
    
}

// solve([40, 'city']);
// solve([21, 'residential']);
// solve([120, 'interstate']);
solve([200, 'motorway']);