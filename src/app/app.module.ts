import { ApiService } from './components/list/api.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
    declarations: [AppComponent, ListComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [ApiService],
    bootstrap: [AppComponent],
})
export class AppModule {}
