import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailService } from '../../Services/email.service';
import { PersonalDetails } from '../../Data/PersonalDetails.';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @ViewChild('myform') myform!: NgForm;
  contacts = PersonalDetails.contact;

  constructor(private emailService: EmailService) {}

  sendMail(contact: any) {
    this.emailService
      .sendMail(contact)
      .then((response) => {
        alert('Mail sent successfully!');
      })
      .catch((error) => {
        alert('An error occurred while sending the email.');
        console.error(error);
      });
  }
}
