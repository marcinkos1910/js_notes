class Auto {
    constructor(brand, maxSpeed) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.engine = false;
        this.speed = 0;
    }

    startEngine(){
        this.engine = true;
        console.log("Engine started");
    }

    stopEngine() {
        this.engine = false;
        console.log("Engine stopped");
    }

    speedUp(amount) {
        if (this.engine){
            this.speed = Math.min(this.speed + amount, this.maxSpeed);
            console.log(`Your speed is ${this.speed}`);
        }else{
            console.log("Start engine first");
        }
    }

    slowDown(amount){
        this.speed = Math.max(this.speed - amount, 0);
        console.log(`Your speed is ${this.speed}`);
    }
}

const bmw = new Auto('bmw', 140);
bmw.speedUp(123);
bmw.startEngine();
bmw.speedUp(123);
bmw.speedUp(223);
bmw.stopEngine();
bmw.slowDown(123);
bmw.slowDown(300);

class Van extends Auto {
    constructor(brand, maxSpeed, seats) {
        super(brand, maxSpeed);
        this.seats = seats;
    }

    stopEngine() {
        // if (!this.speed){
        //     super.stopEngine()
        // }else{
        //     console.log("Slow down first");
        // }
        !this.speed ? this.stopEngine() : console.log("Slow down first");
    }
}

const bmw2 = new Van('bmw', 140, 7);
bmw2.speedUp(123);
bmw2.startEngine();
bmw2.speedUp(123);
bmw2.speedUp(223);
bmw2.stopEngine();
bmw2.slowDown(123);
bmw2.slowDown(300);
