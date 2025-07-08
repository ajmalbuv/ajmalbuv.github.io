import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailService } from '../../Services/email.service';
import { PersonalDetails } from '../../Data/PersonalDetails.';
import { CommonModule } from '@angular/common';
import { Contact } from '../../types/personalDetails.';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private emailService = inject(EmailService);

  @ViewChild('myform') myform!: NgForm;
  contacts = PersonalDetails.contact;

  sendMail(contact: Contact) {
    this.emailService
      .sendMail(contact)
      .then(() => {
        alert('Mail sent successfully!');
      })
      .catch((error) => {
        alert('An error occurred while sending the email.');
        console.error(error);
      });
  }
}
