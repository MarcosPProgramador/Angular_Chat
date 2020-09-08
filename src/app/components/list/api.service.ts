import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public getApi() {
        // fakeApi
        return [
            {
                id: 0,
                name: 'Marcos Proença',
                message: 'Bom diaa!',
                date: '07/09/2020',
                hours: '10:12',
                vip: true,
                show: true,
            },
            {
                id: 1,
                name: 'João Gonalve',
                message: 'E aí seu lixo',
                date: '07/09/2020',
                hours: '10:16',
                vip: false,
                show: false,
            },
            {
                id: 2,
                name: 'Joana Brina',
                message: 'Pra que isso, seu ignorante?',
                date: '07/09/2020',
                hours: '10:17',
                vip: false,
                show: true,
            },
            {
                id: 3,
                name: 'Laura Souza',
                message: 'Isto é completamente normal aqui Joana',
                date: '07/09/2020',
                hours: '11:29',
                vip: true,
                show: true,
            },
            {
                id: 4,
                name: 'Gabriel Jesus',
                message: 'KKKKKKKKKKKKKKKKKKKKKKKKKKKK, o cara foi removido',
                date: '07/09/2020',
                hours: '18:32',
                vip: false,
                show: true,
            },
            {
                id: 5,
                name: 'Jhonata Luiz',
                message: 'Roooi, Joana né?',
                date: '07/09/2020',
                hours: '18:39',
                vip: true,
                show: true,
            },
        ];
    }
}
