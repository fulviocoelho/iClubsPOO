import IVehicleInfo from "../interfaces/IVehicleInfo";
import humanizeDuration from 'humanize-duration';
import Logs from "../usefull/Logs";

export default abstract class Vehicle {
    protected type: string;
    protected speed: number; // km/h
    protected distance: number | undefined; // km
    protected logs: Logs

    constructor({ type, speed }: IVehicleInfo, logs: Logs = new Logs){
        this.speed = speed;
        this.type = type;
        this.logs = logs;
    }

    public abstract colectContent(distance: number): void;
    public abstract deliverContent(distance: number): void;

    protected getRouteTime(): string | void {
        if( this.distance !== undefined ){
            return humanizeDuration(
                ((this.distance / this.speed) * 60) * 60000, 
                { 
                    units: ["d", "h", "m"], 
                    round: true, 
                    delimiter: ' and '
                }
            );
        }
    }

    protected getTransportInfo(): void {
        this.logs.info(`Transport of type ${this.type} at ${this.speed} km/h`)
    }
}