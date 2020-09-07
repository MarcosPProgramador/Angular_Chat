import { Component, OnInit } from '@angular/core';
import { List } from '../../models/app.list';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
    lists: List[];
    constructor() {
        this.lists = [
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
                message: 'E aí seu otário',
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
        ];

    }
    userClick(e) {
        e.currentTarget.classList.toggle('active');
    }
    deleteComment(){
        
    }

    ngOnInit(): void {}
}
