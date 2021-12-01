/// <reference types="mocha">

import { expect } from 'chai';
import Logs from "../src/usefull/Logs"

describe('Log tests', () => {
    it('SUCCESS: Test log info', () => {
        const string = 'teste info';
        const logs = new Logs((value: string) => {
            expect(value).to.be.eq(string);
        });
        logs.info(string);
    })
    it('SUCCESS: Test log alert', () => {
        const string = 'teste alert';
        const logs = new Logs((value: string) => {
            expect(value).to.be.eq(string);
        });
        logs.alert(string);
    })
    it('SUCCESS: Test log error', () => {
        const string = 'teste error';
        const logs = new Logs((value: string) => {
            expect(value).to.be.eq(string);
        });
        logs.error(string);
    })
    it('SUCCESS: Test log init', () => {
        new Logs();
    })
})