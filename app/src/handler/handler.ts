import Car from "../business/Car";
import Transport from "../business/Transport";
import transport_types from "../constants/TransportTypes";

export function handler(type: transport_types) {
    new Transport().start(type);
}