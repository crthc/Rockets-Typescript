class Rocket{
    id:string;
    thrusters:Thruster[]=new Array();
    
    constructor(id:string){
        this.id = id;

    }

    addThruster(thruster:Thruster):void{
        this.thrusters.push(thruster);
    }

}