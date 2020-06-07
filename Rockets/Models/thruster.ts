class Thruster{
    public maxPower: number;
    public actualPower: number;
    

    constructor(maxPower: number){
        this.maxPower=maxPower;
        this.actualPower = 0;
    }

    accelerate() {
        this.actualPower += 10;
    }

    break() {
        this.actualPower -= 10;
    }

}