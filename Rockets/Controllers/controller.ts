let rocket1: Rocket;
let rocket2: Rocket;

(document.getElementById("rocket1") as HTMLInputElement).addEventListener('click', () =>{ // Se crea rocket1 en esta función 
    (document.getElementById("rocket1") as HTMLInputElement).disabled = true;
    (document.getElementById("rocket1") as HTMLInputElement).innerHTML = 'Created!';
   
    let id = '32WESSDS';
    rocket1 = new Rocket(id);

    let maxPower= [10, 30, 80]; // Potencia de cada propulsor. 

    // Creamos propulsores con sus respectivas potencias.
    for (let i=0; i<= maxPower.length-1; i++){
        let thrusters = new Thruster(maxPower[i]); 
        rocket1.addThruster(thrusters);
    }

});

(document.getElementById("rocket2") as HTMLInputElement).addEventListener('click', () =>{ // Se crea rocket2 en esta función

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
});

(document.getElementById("accelerateRocket1") as HTMLInputElement).addEventListener('click', () =>{
    accelerateRocket(rocket1);
});
(document.getElementById("accelerateRocket2") as HTMLInputElement).addEventListener('click', () => {
    accelerateRocket(rocket2);
});
(document.getElementById("breakRocket1") as HTMLInputElement).addEventListener('click', () => {
    breakRocket(rocket1);
});
(document.getElementById("breakRocket2") as HTMLInputElement).addEventListener('click', () => {
    breakRocket(rocket2);
});
(document.getElementById("printRocket1") as HTMLInputElement).addEventListener('click', () => {
    (document.getElementById("showRocket1") as HTMLParagraphElement).innerHTML = printRocket(rocket1);
});
(document.getElementById("printRocket2") as HTMLInputElement).addEventListener('click', () => {
    (document.getElementById("showRocket2") as HTMLParagraphElement).innerHTML = printRocket(rocket2);
});
(document.getElementById("printAll") as HTMLInputElement).addEventListener('click', () => {
    (document.getElementById("showRocket1") as HTMLParagraphElement).innerHTML = printRocket(rocket1);
    (document.getElementById("showRocket2") as HTMLParagraphElement).innerHTML = printRocket(rocket2);
});

function accelerateRocket(rocket:any){
    for(let i of rocket.thrusters){
        if (i.actualPower == i.maxPower){
            i.actualPower = i.actualPower;
        }else if (i.actualPower < i.maxPower){
            i.accelerate();
        }   
    }
}

function breakRocket(rocket:any){
    for(let i of rocket.thrusters){
        if (i.actualPower == 0){
            i.actualPower = i.actualPower;
        }else if (i.actualPower > 0){
            i.break();
        }   
    }
}

function printRocket(rocket:any){
     // Sacamos potencias de cada propulsor.
    let thrustersPower = []
    for(let i of rocket.thrusters){
        thrustersPower.push(i.maxPower);
    }

    let thrustersActualPower = []
    for(let i of rocket.thrusters){
        thrustersActualPower.push(i.actualPower);
    }
    
    let totalmaxPower = thrustersPower.reduce((a, b) => a + b, 0); // Potencia máxima total del cohete
    let actualPower = thrustersActualPower.reduce((a, b) => a + b, 0); // Potencia actual del cohete
 
    return `Rocket ${rocket.id} actual power is ${actualPower}. <br>The ${rocket.thrusters.length} thrusters actual power is ${thrustersActualPower.join(', ')}. <br>Rocket maximum power is ${totalmaxPower}. <br>Thrusters maximum power is ${thrustersPower.join(', ')}.`; 

}






