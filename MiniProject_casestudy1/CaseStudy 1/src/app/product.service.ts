import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  myobj={}
  constructor(private http : HttpClient) { }

  readData():Observable<Object>{
    console.log("Read Data");
    return this.http.get('http://localhost:1010/rest/api/display')
  }

  deleteData(ename:string):Observable<Object>{
    console.log(ename);
    return this.http.post('http://localhost:1010/rest/api/remove',{
    Name:ename
    
  });
}

  editData (eid:number,ename:string,edes:string,eprice:number){
     this.myobj={
        id:eid,
        name:ename,
        description:edes,
        price:eprice

      }

    return this.myobj;
    
  }

  returnData(){
    return this.myobj;
  }

  updateData(eid:number,ename:string,edescription:string,eprice:number,name:string):Observable<Object>{
  
      return this.http.post('http://localhost:1010/rest/api/update',{
          eid:eid,
          ename:ename,
          edescription:edescription,
          eprice:eprice,
          name:name
    
  });

}

addData(aid:number,aname:string,ades:string,aprice:number):Observable<Object>{
    return  this.http.post('http://localhost:1010/rest/api/add',{
          ID:aid,
          Name:aname,
          Description:ades,
          Price:aprice,
              
  });
}

deleteEverything():Observable<Object>{
    return this.http.post('http://localhost:1010/rest/api/deleteAll',{})
}
}