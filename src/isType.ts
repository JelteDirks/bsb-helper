export interface Type {
    isArray(...value: any[]): boolean;

    isString(...value: any[]): boolean;

    isObject(...value: any[]): boolean;

    isNumber(...value: any[]): boolean;

    isDate(...value: any[]): boolean;

    isNull(...value: any[]): boolean;

    isUndefined(...value: any[]): boolean;

    isBoolean(...value: any []): boolean;

    anyIsArray(...value: any[]): boolean;
    anyIsString(...value: any[]): boolean;
    anyIsObject(...value: any[]): boolean;
    anyIsNumber(...value: any[]): boolean;
    anyIsDate(...value: any[]): boolean;
    anyIsBoolean(...value: any[]): boolean;
}

export var isType: Type = {
    isArray: curryTypeEvery('Array'),
    isString: curryTypeEvery('String'),
    isObject: curryTypeEvery('Object'),
    isNumber: curryTypeEvery('Number'),
    isDate: curryTypeEvery('Date'),
    isBoolean: curryTypeEvery('Boolean'),
    anyIsArray: curryTypeAny('Array'),
    anyIsString: curryTypeAny('String'),
    anyIsObject: curryTypeAny('Object'),
    anyIsNumber: curryTypeAny('Number'),
    anyIsDate: curryTypeAny('Date'),
    anyIsBoolean: curryTypeAny('Array'),
    isNull: function (...args) {
        return args.every(function (argument: any) {
            return argument === null;
        });
    },
    isUndefined: function (...args) {
        return args.every(function (argument: any) {
            return typeof argument === typeof undefined;
        });
    }
};

function curryTypeEvery(type: string): (...value: any[]) => boolean {
    return function (...args) {
        return args.every(function (argument: any) {
            return Object.prototype.toString.call(argument) === '[object ' + type + ']'
        });
    }
}

function curryTypeAny(type: string): (...value: any[]) => boolean {
    return function (...args) {
        return args.some(function (argument: any) {
            return Object.prototype.toString.call(argument) === '[object ' + type + ']'
        });
    }
}