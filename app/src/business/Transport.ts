import Vehicle from "../abstract/Vehicle";
import transport_types from "../constants/TransportTypes";
import VehicleFactory from "../factory/VehicleFactory";
import Logs from "../usefull/Logs";
import UsefullMath from "../usefull/UsefullMath";

export default class Transport {
    private logs: Logs;
    private math: UsefullMath;

    constructor(logs: Logs = new Logs, math: UsefullMath = new UsefullMath()) {
        this.logs = logs;
        this.math = math;

        return this;
    }

    public start(type: transport_types) {
        this.logs.alert('iniciating transport ...')
        const vehicle: Vehicle = new VehicleFactory(type).create();
        vehicle.colectContent(this.math.randomNumber({ start: 1, end: 80 }));
        vehicle.deliverContent(this.math.randomNumber({ start: 5, end: 100 }));
        this.logs.alert('ending transport ...')
    }
}