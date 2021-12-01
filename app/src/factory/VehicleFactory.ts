import Vehicle from "../abstract/Vehicle";
import Car from "../business/Car";
import Motorcicle from "../business/Motorcicle";
import vehicle_types from "../constants/VehicleTypes";
import Logs from "../usefull/Logs";

export default class VehicleFactory {
    private type: number;
    private logs: Logs;

    constructor(type: number, logs: Logs = new Logs()) {
        this.type = type;
        this.logs = logs;

        return this;
    }

    public create(): Vehicle {
        switch(this.type) {
            case vehicle_types.car: return new Car();
            case vehicle_types.motorcicle: return new Motorcicle();
            default: this.logs.error('vehicle not found ...'); throw new Error();
        }
    }
}