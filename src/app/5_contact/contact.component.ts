import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit { 



  ngOnInit(): void {}

public contactForm: FormGroup = new FormGroup({
  name: new FormControl('',[
    Validators.required],[]),
  email: new FormControl('', [
    Validators.required, Validators.email],[]),
  message: new FormControl('', [Validators.required, Validators.minLength(20)],[]),
})
constructor() {
  this.contactForm.valueChanges
}
}

// myForm!: FormGroup;
//   isSubmitted = false;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.myForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       message: ['', [Validators.required, Validators.minLength(5)]],
//     });
//   }

//   onSubmit() {
//     this.isSubmitted = true;
//     if (this.myForm.valid){
//       this.isSubmitted = false;
//       console.log("Form Submitted!", this.myForm.value);
//       this.myForm.reset();
//     }
//   }



