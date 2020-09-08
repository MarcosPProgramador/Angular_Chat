import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { List } from '../../models/app.list';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
    lists: List[];

    constructor(private apiService: ApiService) {
        this.lists = this.apiService.getApi();
    }

    userClick(e) {
        e.currentTarget.classList.toggle('active');
    }
    deleteComment() {}

    ngOnInit(): void {}
}
