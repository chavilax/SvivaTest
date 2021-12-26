import { validateVerticalPosition } from '@angular/cdk/overlay';
import { tokenReference } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {Order} from '../order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  form !: FormGroup;

name!:String;
   order:Order
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [ Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]);
 id = new FormControl('', [Validators.required]);
 firstName = new FormControl('', [Validators.required]);
 lastName = new FormControl('', [Validators.required]);

password = new FormControl('', [Validators.pattern('(?=.*[A-z])(?=.*[0-9]).{8,}')]);
confirmPassword = new FormControl('', []);




  getEmailErrorMessage() {
 
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    
    
  }
  getPhoneErrorMessage() {
      return  'Not a valid phone number' ;
  }
  getRequiredErrorMessage(){
    return 'must have a value!'
  }
  


  constructor(private route:Router) {
   this.order=new Order();

    this.order.name={firstName:'',lastName:''};
    this.order.password={pwd:'',confirmPwd:''};
    this.name=this.order.name.firstName;

  }
 
   
  onSubmit(){
    debugger;
    console.log(this.email.hasError);
    
 if(this.email.errors||this.firstName.errors||this.lastName.errors||this.password.errors||this.confirmPassword.errors)
 alert("u have errors")
 else
    this.route.navigate(['../entrance/'+this.order.name.firstName])
   
  }

  ngOnInit(): void {
  }

}

