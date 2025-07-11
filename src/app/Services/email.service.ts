import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';
import { ContactFormData } from '../types/contact-form';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {
    emailjs.init(environment.emailjsPublicKey);
  }

  sendMail(contact: ContactFormData) {
    const templateParams = {
      name: `${contact.firstname} ${contact.lastname}`,
      email: contact.email,
      ph: contact.ph,
      message: contact.message,
    };

    return emailjs
      .send(
        environment.emailjsServiceId,
        environment.emailjsTemplateId,
        templateParams,
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        return response;
      })
      .catch((error) => {
        console.error('FAILED...', error);
        throw error;
      });
  }
}
