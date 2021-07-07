import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplayComponent} from './display/display.component';
import {EditpageComponent} from './editpage/editpage.component';
import {AddpageComponent} from './addpage/addpage.component';


const routes :Routes= [
    {path:'display',component:DisplayComponent},
    {path:'edit',component:EditpageComponent},
    {path:'add', component:AddpageComponent},
     {path:'display/display',component:DisplayComponent}
  ];
 


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})



export class ProductRoutingModule {}

