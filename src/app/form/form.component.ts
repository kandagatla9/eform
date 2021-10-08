import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
/*import { EventEmitter } from 'eventemitter3';*/

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
   
  requiredForm = new FormGroup({
    ename: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ][a-zA-Z]+")]),
    salary: new FormControl('', [Validators.required, Validators.pattern("[0-9]+")]),
    dob: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
  })
  

   
 
   
  @Output() formDetails = new EventEmitter();
 
  onSubmit(){
    console.log(this.requiredForm.value);

    if(this.requiredForm.valid){
      
       this.formDetails.emit(this.requiredForm.value);
       this.requiredForm.reset();
       console.log(this.requiredForm.value);
    }else{
      console.log("error");
    }
  }

}
