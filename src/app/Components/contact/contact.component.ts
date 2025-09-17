import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PersonalDetails } from '../../Data/PersonalDetails';
import { EmailService } from '../../Services/email.service';
import { ContactFormData } from '../../types/contact-form';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private emailService = inject(EmailService);

  @ViewChild('myform') myform!: NgForm;
  contacts = PersonalDetails.contact;

  sendMail(contact: ContactFormData) {
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
