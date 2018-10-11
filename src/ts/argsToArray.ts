function argsToArray(arg: object) {
    return Array.prototype.map.call(arg, function (argument: any) {
        return argument;
    });
}

export {argsToArray};

