import Vehicle from "../abstract/Vehicle";

export default class Car extends Vehicle {

    constructor() {
        super({ type: 'CAR', speed: 50 })

        this.getTransportInfo();
    }

    public colectContent(distance: number = 1000): void {
        this.distance = distance;
        this.logs.info('Started colect process...');
        this.logs.alert(`Expected ${this.getRouteTime()} to Reach Destination...`);
    }
    public deliverContent(distance: number = 500): void {
        this.distance = distance;
        this.logs.info('Started deliver process...');
        this.logs.alert(`Expected ${this.getRouteTime()} to Reach Destination...`);
    }

}