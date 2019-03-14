type LogMode = "default" | "immediate";

export class Log {
    private enabled = true;
    private messages: LogMessage[] = [];
    private mode: LogMode = "default";

    constructor() {
    }

    public setMode(m: LogMode): void {
        this.mode = m;
    }

    private addMessage(m: LogMessage) {
        this.messages.push(m);

        if (this.mode === "immediate") {
            logger.info(m.retrieve());
        }
    }

    public info(v: string) {
        if (!this.enabled) return;
        this.addMessage(new LogMessage('info', v));
    }

    public warn(v: string) {
        if (!this.enabled) return;
        this.addMessage(new LogMessage('warn', v));
    }

    public error(v: string) {
        if (!this.enabled) return;
        this.addMessage(new LogMessage('error', v));
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
