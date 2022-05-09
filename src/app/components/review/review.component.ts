import { reviews } from './../../models/review';
import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private _httpClient:HttpClient) { }
reviwes:reviews[]=[]
  ngOnInit(): void {
    this._httpClient.get('http://localhost:9000/reviews',{observe:"response"}).subscribe(
     (response:any)=>{
     
    this.reviwes=response.body
     console.log(this.reviwes)
  }
       ,(error:any)=>{
        alert("error");
      }
    );
  }
  add(comment:string):void
  {
    let reviewinfo=new reviews();
  reviewinfo.reviw=comment;
    this._httpClient.post('http://localhost:9000/reviews',reviewinfo).subscribe(
      (response:any)=>{
        reviewinfo.id=response.Data;
        this.reviwes.push(reviewinfo);
      },
      (error:any)=>{

      }
    );
  }


}
