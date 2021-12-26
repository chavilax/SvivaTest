import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  import { OrderFormComponent } from './order-form/order-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntranceComponent } from './entrance/entrance.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'entrance/:name', component: EntranceComponent },
  { path: 'entrance', component: EntranceComponent },
 { path: '', component : OrderFormComponent}


];
// import { Order } from '/order.js';

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    EntranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes)
    //RouterModule
    //.forRoot(routes)
  ],
  exports:[MatFormFieldModule ,
     MatSelectModule,MatInputModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      FormsModule,
      RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
