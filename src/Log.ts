export class Log {
    private enabled = true;
    private messages: LogMessage[] = [];

    constructor() {
    }

    public info(v: string) {
        if (!this.enabled) return;
        this.messages.push(new LogMessage('info', v));
    }

    public warn(v: string) {
        if (!this.enabled) return;
        this.messages.push(new LogMessage('warn', v));
    }

    public error(v: string) {
        if (!this.enabled) return;
        this.messages.push(new LogMessage('error', v));
    }

    public logAll() {
        if (!this.enabled) return;
        logger.info(this.messages.map(m => m.retrieve()).join(('')));
    }

    public enable(b?: boolean): void {
        this.enabled = typeof b === 'boolean' ? b : true;
    }

    public disable() {
        this.enabled = false;
    }
}

export class LogMessage {
    constructor(private type, private message) {
    }

    retrieve() {
        return `\n${this.type.toUpperCase()}: ${this.message}`;
    }
}

export const log = new Log();