import { ApiOnService } from './components/users-on/api-on.service';
import { ApiService } from './components/list/api.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { UsersOnComponent } from './components/users-on/users-on.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        UsersOnComponent,
        AnnouncementComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [ApiService, ApiOnService],
    bootstrap: [AppComponent],
})
export class AppModule {}
