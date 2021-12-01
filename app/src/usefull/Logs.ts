import clc from 'cli-color'

export default class Logs {
    private terminal: Function;

    constructor(terminal: Function = console.log){
        this.terminal = terminal;
    }

    public info(...values: Array<unknown>) {
        this.terminal(clc.blue('INFO::'), ...values);
    }
    public alert(...values: Array<unknown>) {
        this.terminal(clc.yellow('ALERT::'), ...values);
    }
    public error(...values: Array<unknown>) {
        this.terminal(clc.red('ERROR::'), ...values);
    }
}