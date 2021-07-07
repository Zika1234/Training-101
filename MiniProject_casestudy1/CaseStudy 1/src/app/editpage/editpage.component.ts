import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router) { }
data1:any;
 id:number;
  name:string;
  des:string;
  price:number;
  i=0;
 
   eid:number;
  ename:string;
 edescription:string;
  eprice:number;
 obj={}
fix:string;
  ngOnInit() {
     this.obj= this.productService.returnData();

   
     this.id=this.obj.id;
     this.name=this.obj.name;
     this.des=this.obj.description;
     this.price=this.obj.price;

     

  }

  onSubmit():void{

        this.eid=this.id,
        this.ename=this.name,
        this.edescription=this.des,
        this.eprice=this.price
     this.fix= this.obj.name;
  
      this.productService.updateData(this.eid,this.ename,this.edescription,this.eprice,this.fix).subscribe(()=>this.router.navigateByUrl('display'));
      
  }

 homepage():void{

    this.router.navigateByUrl('display');
 }

  
}
