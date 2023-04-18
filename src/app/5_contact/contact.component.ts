import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit { 
  
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  ngOnInit(): void {}

  async sendMail(){
    console.log('Sending Mail', this.myForm);

    let nameField =  this.nameField.nativeElement;      // rechte Seite ist Äquivalent zu document.getElementById/ wir lesen den Inhalt der Zielfelder aus
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton =  this.sendButton.nativeElement;

    nameField.disabled = true;          // wir deaktivieren die Zielfelder
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

        //  senden //
  let fd = new FormData();
  fd.append('name', nameField.value);   // zu sendender Inhalt wir definiert + verpackt bzw. versandtfertig gemacht
  fd.append('email', emailField.value);
  fd.append('message', messageField.value);

  await fetch('https://rafael-albrecht.developerakademie.net/_Backends/Portfolio/send_mail/send_mail.php'),   // Inhalt wird gesendet
            {
              method: 'POST',    // mit Hilfe der Post-request Methode wird versendet 
              body: fd
            };

    // Text anzeigen Nachricht gesendet

  nameField.disabled = false;
  emailField.disabled = false;
  messageField.disabled = false;
  sendButton.disabled = false;
  }

onNavigate() {
  // your logic here.... like set the url 
  const url = 'https://rafael-albrecht.developerakademie.net/_Backends/Portfolio/send_mail/success.html';
  window.open(url, '_blank');
}


// FormValidation

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



