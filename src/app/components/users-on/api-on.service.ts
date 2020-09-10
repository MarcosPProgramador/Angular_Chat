import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiOnService {
    constructor() {}
    getApi() {
        return [
            {
                name: 'Sabrina Silva',
                report: 51,
            },
            {
                name: 'Joise Souza',
                report: 15,
            },
            {
                name: 'Gabriel Vitorino',
                report: 21,
            },
            {
                name: 'José Victor',
                report: 257,
            },
            {
                name: 'Pedro Alváres',
                report: 1,
            },
            {
                name: 'Eduarda Sandra',
                report: 4,
            },
        ];
    }
}
