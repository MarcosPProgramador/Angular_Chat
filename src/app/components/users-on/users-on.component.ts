import { Report } from './../../models/app.report-list';
import { ApiOnService } from './api-on.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-users-on',
    templateUrl: './users-on.component.html',
    styleUrls: ['./users-on.component.css'],
})
export class UsersOnComponent implements OnInit {
    ListUser: Report[];
    constructor(private apiOnService: ApiOnService) {
        this.ListUser = this.apiOnService.getApi();
    }
    addClass(e){
        e.target.classList.toggle('active')
    }
    ngOnInit(): void {}

}
