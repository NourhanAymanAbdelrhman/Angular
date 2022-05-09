import { Menu } from './../../models/menu';
import { Component, OnInit } from '@angular/core';

import{HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpClient:HttpClient) { 
    
  }
   menu:Menu[]=[]
  ngOnInit(): void {
    this._httpClient.get("http://localhost:8020/orders",{observe:"body"}).subscribe(
    (response:any)=>{
      console.log(response)
     this.menu=response
     
    }
      ,(error:any)=>{
       alert("error");
     }
   );
  }
  add(review:string):void
  {
   let menu=new Menu()
   menu.review=review;
   this._httpClient.post('http://localhost:8020/orders',menu).subscribe(
      (response:any)=>{
        menu.id=response.Data;
        this.menu.push(menu);
      },
      (error:any)=>{

      }
    );
   
  }



}
