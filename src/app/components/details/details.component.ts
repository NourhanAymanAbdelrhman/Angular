import { Menu } from './../../models/menu';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 order:Menu=new Menu()
  constructor(private _activatedRoute:ActivatedRoute,private _httpClient:HttpClient) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      parms=>{
        let id=parms.get('id');
        this._httpClient.get(`http://localhost:8020/orders?id=${id}`)
        .subscribe(
          (response:any)=>{
            this.order=response[0]
            console.log(this.order)
          },
          (error:any)=>{}
        );
        
  } 
  )

  }
}
