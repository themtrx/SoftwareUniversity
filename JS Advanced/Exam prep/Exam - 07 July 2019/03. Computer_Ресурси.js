class Computer {

    constructor(ramMemory, cpuGHz, hddMemory){
        this.ramMemory = Number(ramMemory);
        this.cpuGHz = Number(cpuGHz);
        this.hddMemory = Number(hddMemory);
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {

        if(requiredSpace>this.hddMemory){
            throw new TypeError('There is not enough space on the hard drive');
        }

        const obj = {
            name,
            requiredSpace
        }

        this.installedPrograms.push(obj);
        this.hddMemory-= requiredSpace;

        return obj
    }

    uninstallAProgram(name){

        let isThere = this.installedPrograms.find((x) => x.name === name);

        if(!isThere){
            throw new TypeError('Control panel is not responding');
        }

        let objIndex = this.installedPrograms.indexOf(isThere);

        let removed = this.installedPrograms.splice(objIndex, 1);
        let reduceMemory = removed[0].requiredSpace;

        this.hddMemory += reduceMemory;

        return this.installedPrograms;
    }

    openAProgram(name){
        let isThere = this.installedPrograms.find((x) => x.name === name);
        let isOpen = this.taskManager.find((x) => x.name === name);

        if(!isThere){
            throw new TypeError(`The ${name} is not recognized`);
        }

        if(isOpen){
            throw new TypeError(`The ${name} is already open`);
        }

        let objIndex = this.installedPrograms.indexOf(isThere);
        let currentProgram = this.installedPrograms[objIndex];

        let ramUsage = (currentProgram.requiredSpace/this.ramMemory) *1.5;
        let cpuUsage = ((currentProgram.requiredSpace/this.cpuGHz)/500)*1.5;

        let totalRam = this.taskManager.reduce((acc,curr) => {
            acc+= curr.ramUsage;
            return acc;
        }, 0) + ramUsage;

        if(totalRam >= 100) {
            throw new TypeError(`${name} caused out of memory exception`);
        }

        let totalCPU = this.taskManager.reduce((acc,curr) => {
            acc+=curr.cpuUsage;
            return acc;
        }, 0) + cpuUsage;

        if(totalCPU>=100) {
            throw new TypeError(`${name} caused out of cpu exception`)
        }

        let obj = {
            name,
            ramUsage,
            cpuUsage
        }

        this.taskManager.push(obj);

        return obj;
    }

    taskManagerView(){

        if(this.taskManager.length === 0) {
            return 'All running smooth so far';
        }else if(this.taskManager.length === 1) {
            return `Name - ${this.taskManager[0].name} | Usage - CPU: ${(this.taskManager[0].cpuUsage).toFixed(0)}%, RAM: ${(this.taskManager[0].ramUsage).toFixed(0)}%`;
        }else {

            let allTasks = '';

            this.taskManager.forEach((task) => {
                allTasks+= `Name - ${task.name} | Usage - CPU: ${(task.cpuUsage).toFixed(0)}%, RAM: ${(task.ramUsage).toFixed(0)}%\n`
            });

            return allTasks.trim();
        }
    }
}



let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.uninstallAProgram('Word');
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Excel');
console.log(computer.taskManagerView());
