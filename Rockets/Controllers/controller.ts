let rocket1: Rocket;
let rocket2: Rocket;

(document.getElementById("rocket1") as HTMLInputElement).addEventListener('click', createrocket1);
(document.getElementById("rocket2") as HTMLInputElement).addEventListener('click', createrocket2);
(document.getElementById("accelerateRocket1") as HTMLInputElement).addEventListener('click', accelerateRocket1);
(document.getElementById("accelerateRocket2") as HTMLInputElement).addEventListener('click', accelerateRocket2);
(document.getElementById("breakRocket1") as HTMLInputElement).addEventListener('click', breakRocket1);
(document.getElementById("breakRocket2") as HTMLInputElement).addEventListener('click', breakRocket2);
(document.getElementById("printRocket1") as HTMLInputElement).addEventListener('click', printRocket1);
(document.getElementById("printRocket2") as HTMLInputElement).addEventListener('click', printRocket2);
(document.getElementById("printAll") as HTMLInputElement).addEventListener('click', () => {
    printRocket1();
    printRocket2();
});

function createrocket1(){
    let createRocket = document.getElementById("rocket1") as HTMLInputElement;
    createRocket.disabled = true;
    createRocket.innerHTML = 'Created!';

    let id = '32WESSDS';
    rocket1 = new Rocket(id);

    let maxPower= [10, 30, 80]; // Potencia de cada propulsor. 

    // Creamos propulsores con sus respectivas potencias.
    for (let i=0; i<= maxPower.length-1; i++){
        let thrusters = new Thruster(maxPower[i]); 
        rocket1.addThruster(thrusters);
    }

    console.log(rocket1);

}

function createrocket2(){
    let createRocket = document.getElementById("rocket2") as HTMLInputElement;
    createRocket.disabled = true;
    createRocket.innerHTML = 'Created!';

    let id = 'LDSFJA32';
    rocket2 = new Rocket(id);
    
    let maxPower = [30, 40, 50, 50, 30, 10]; // Potencia de cada propulsor. 

    // Creamos propulsores con sus respectivas potencias.
    for (let i=0; i<= maxPower.length-1; i++){
        let thrusters = new Thruster(maxPower[i]); 
        rocket2.addThruster(thrusters);
    }
}

function accelerateRocket1(){
    for(let i of rocket1.thrusters){
        if (i.actualPower == i.maxPower){
            i.actualPower = i.actualPower;
        }else if (i.actualPower < i.maxPower){
            i.accelerate();
        }   
    }
}

function accelerateRocket2(){
    for(let i of rocket2.thrusters){
        if (i.actualPower == i.maxPower){
            i.actualPower = i.actualPower;
        }else if (i.actualPower < i.maxPower){
            i.accelerate();
        }   
    }
    
}

function breakRocket1(){
    for(let i of rocket1.thrusters){
        if (i.actualPower == 0){
            i.actualPower = i.actualPower;
        }else if (i.actualPower > 0){
            i.break();
        }   
    }
}

function breakRocket2(){
    for(let i of rocket2.thrusters){
        if (i.actualPower == 0){
            i.actualPower = i.actualPower;
        }else if (i.actualPower > 0){
            i.break();
        }   
    }
}

function printRocket1(){

     // Sacamos potencias de cada propulsor.
    let thrustersPower = []
    for(let i of rocket1.thrusters){
        thrustersPower.push(i.maxPower);
    }

    let thrustersActualPower = []
    for(let i of rocket1.thrusters){
        thrustersActualPower.push(i.actualPower);
    }
    
    let totalmaxPower = thrustersPower.reduce((a, b) => a + b, 0); // Potencia máxima total del cohete
    let actualPower = thrustersActualPower.reduce((a, b) => a + b, 0); // Potencia actual del cohete
 
    let showRocket = document.getElementById("showRocket1") as HTMLParagraphElement; 
    showRocket.innerHTML= `Rocket ${rocket1.id} actual power is ${actualPower}. <br>The ${rocket1.thrusters.length} thrusters actual power is ${thrustersActualPower.join(', ')}. <br>Rocket maximum power is ${totalmaxPower}. <br>Thrusters maximum power is ${thrustersPower.join(', ')}.`; 
    
}

function printRocket2(){
     // Sacamos potencias de cada propulsor.
    let thrustersPower = []
    for(let i of rocket2.thrusters){
        thrustersPower.push(i.maxPower);
    }

    let thrustersActualPower = []
    for(let i of rocket2.thrusters){
        thrustersActualPower.push(i.actualPower);
    }

    let totalmaxPower = thrustersPower.reduce((a, b) => a + b, 0); // Potencia máxima total del cohete
    let actualPower = thrustersActualPower.reduce((a, b) => a + b, 0); // Potencia actual del cohete
    
    let showRocket = document.getElementById("showRocket2") as HTMLParagraphElement; 
    showRocket.innerHTML= `Rocket ${rocket2.id} actual power is ${actualPower}. <br>The ${rocket2.thrusters.length} thrusters actual power is ${thrustersActualPower.join(', ')}. <br>Rocket maximum power is ${totalmaxPower}. <br>Thrusters maximum power is ${thrustersPower.join(', ')}.`; 
}




