import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'react-driven-appraoch';
   genders = ['male', 'female'];
   isSubmitClicked=false;

   signupForm:FormGroup

   ngOnInit(){
     this.signupForm = new FormGroup({
       'userData' : new FormGroup({
         'username': new FormControl(null,Validators.required),
         'email' : new FormControl(null,[Validators.required,Validators.email]),
       }),
       'gender' : new FormControl('male'),
       'hobbies': new FormArray([new FormControl('male'),])
     })
   }

   onSubmit(){
     console.log(this.signupForm);
     this.isSubmitClicked = true;
     if (this.signupForm.valid) {
      console.log('form submitted');
    } else {
      // this.validateAllFormFields(this.signupForm); //{7}
    }
   }

//    validateAllFormFields(formGroup: FormGroup) {         //{1}
//   Object.keys(formGroup.controls).forEach(field => {  //{2}
//     const control = formGroup.get(field);             //{3}
//     if (control instanceof FormControl) {             //{4}
//       control.markAsTouched({ onlySelf: true });
//     } else if (control instanceof FormGroup) {        //{5}
//       this.validateAllFormFields(control);            //{6}
//     }
//   });
// }

   addHobby(){
     const control = new FormControl(null,Validators.required);
     (<FormArray>this.signupForm.get('hobbies')).push(control);
   }

   getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

}
