import { Component } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Orders';
  // router!: any;
  //   constructor(private _router:ActivatedRoute){
  //     this._router.url.subscribe(params => {
  //       this.router = params[0].path;
  //     });
  //  // this.router = _router.url;
  //   console.log("rrrrrrrr",this.router);
     

  // }
//   constructor(private _router:Router){
//   this.router=_router;
//   // console.log(this.router.url);
   

// }
}
