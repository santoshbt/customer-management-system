export interface ILogger{
    Log() : any
}

export class BaseLogger implements ILogger {
    Log() {

    }
}

export class ConsoleLogger extends BaseLogger {
    override Log() {
        console.log("Using console logger")
    }
}

export class DbLogger extends BaseLogger {
    override Log() {
        console.log("Using Db Logger")
    }
}

export class FileLogger extends BaseLogger {
    override Log() {
        console.log("Using File Logger")
    }
}