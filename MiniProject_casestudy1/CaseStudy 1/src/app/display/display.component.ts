import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { HttpClient} from '@angular/common/http';
import {EditpageComponent} from '../editpage/editpage.component';
import {Router} from '@angular/router';
import {AddpageComponent} from '../addpage/addpage.component';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private productService:ProductService, private router :Router) { } 

  data1:any;
  length=0;
  tab=0;
  obj={};
  array=[];
  id:number;
  name:string;
  des:string;
  price:number;
  eid:number;
  ename:string;
  edescription:string;
  eprice:number;
  fix:string;
  showEdit:boolean =true;
  i:number;
  tot:number;

  ngOnInit()
   {
     this.productService.readData().subscribe((data=>{this.data1=data})) 
     
    }

  onDelete(name){
    this.productService.deleteData(name).subscribe();
    location.reload(true);
    }

  onEdit(id,name,des,price){
    this.showEdit=false;
    this.productService.editData(id,name,des,price);
    this.obj= this.productService.returnData();
  

    this.id=this.obj.id;
    this.name=this.obj.name;
    this.des=this.obj.description;
    this.price=this.obj.price;

     }

  onSubmit(){

    this.eid=this.id,
    this.ename=this.name,
    this.edescription=this.des,
    this.eprice=this.price
    this.fix= this.obj.name;
    if(this.eid===null || this.eid<0 || this.eid > 99)
    {
      alert("Fill it first");
      return false;
    }
    // this.productService.updateData(this.eid,this.ename,this.edescription,this.eprice,this.fix).subscribe(()=>this.router.navigateByUrl('display'));
    // location.reload(true);
    // this.showEdit=true;

    }
  

  homepage():void{
    this.showEdit=true;
    }
  
  addProduct(){
    

    this.router.navigateByUrl('add');
  
    }

  deleteAll():void{
      this.productService.deleteEverything().subscribe();
      console.log("Button is pressed");
       location.reload(true);
    }

  sortById(){
    this.data1.sort(function(a,b){
      return (a.ID-b.ID);})
   }

   sortByName(){
    this.data1.sort(function(a,b){
      return (''+a.Name).localeCompare(b.Name);})
    }

    sortByPrice(){
    this.data1.sort(function(a,b){
        return (a.Price-b.Price);})
    }
}


 

     
     
   
  


