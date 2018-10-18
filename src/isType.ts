import {argsToArray} from "./argsToArray";

export interface Type {
    isArray(...value: any[]): boolean;

    isString(...value: any[]): boolean;

    isObject(...value: any[]): boolean;

    isNumber(...value: any[]): boolean;

    isDate(...value: any[]): boolean;

    isNull(...value: any[]): boolean;

    isUndefined(...value: any[]): boolean;

    isBoolean(...value: any []): boolean;
}

export var isType: Type = {
    isArray: curryType('Array'),
    isString: curryType('String'),
    isObject: curryType('Object'),
    isNumber: curryType('Number'),
    isDate: curryType('Date'),
    isBoolean: curryType('Boolean'),
    isNull: function () {
        return argsToArray(arguments).every(function (argument: any) {
            return argument === null;
        });
    },
    isUndefined: function () {
        return argsToArray(arguments).every(function (argument: any) {
            return typeof argument === typeof undefined;
        });
    }
};

function curryType(type: string): (...value: any[]) => boolean {
    return function () {
        return argsToArray(arguments).every(function (argument: any) {
            return Object.prototype.toString.call(argument) === '[object ' + type + ']'
        });
    }
}