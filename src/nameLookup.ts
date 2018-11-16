import {arrayFind} from "./arrayFind";

export const nameDatabase: NameDatabaseInstance[] = [
    {
        name: 'Test waarde',
        id: 'test_waarde'
    },
    {
        name: '',
        id: ''
    }
];

export interface NameDatabaseInstance {
    name: string;
    id: string;
}

export const nameLookup = {
    id: (v: string) => {
        let result = arrayFind(nameDatabase, (e: NameDatabaseInstance) => {
            return e.id === v;
        });

        return !!result ? result.name : null;
    },
    name: (v: string) => {
        let result = arrayFind(nameDatabase, (e: NameDatabaseInstance) => {
            return e.name === v;
        });

        return !!result ? result.id : null;
    }
};