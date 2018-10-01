import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { EditpageComponent } from './editpage/editpage.component';
import { ProductRoutingModule } from './/product-routing.module';
import {FormsModule} from '@angular/forms';
import { AddpageComponent } from './addpage/addpage.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    EditpageComponent,
    AddpageComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, ProductRoutingModule,FormsModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
