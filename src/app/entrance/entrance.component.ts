import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {

  name !:String;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.url
      .subscribe(params => {
      
       var x=params.length;
      this.name = params[x-1].path;
      }
    );
  }

}

// this.route.queryParams
// .subscribe(params => {
//   console.log(params); // { orderby: "price" }
//   this.name = params['name'];
  
//   console.log(this.name); // price