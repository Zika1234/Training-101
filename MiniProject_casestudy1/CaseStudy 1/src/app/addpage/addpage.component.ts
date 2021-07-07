import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent implements OnInit {

  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit() {
  }

  // aid:number;
  // aname:string;
  // ades:string;
  // aprice:number;
  // myId:number;
  // myForm:any = {
  // };


Addid:number;
Addname:string;
Adddes:string;
Addprice:number;



  onSubmit(AddForm:NgForm){
    
    this.Addid=AddForm.controls['aid'].value;
    this.Addname=AddForm.controls['aname'].value;
    this.Adddes=AddForm.controls['ades'].value;
    this.Addprice=AddForm.controls['aprice'].value;
  
    this.productService.addData(this.Addid,this.Addname,this.Adddes,this.Addprice).subscribe(()=> this.router.navigateByUrl('display'));

  }
    homepage(AddForm:NgForm){
      // AddForm.reset();
       this.router.navigateByUrl('display');
    }
}
