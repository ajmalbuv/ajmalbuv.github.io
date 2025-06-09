import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {
    emailjs.init(environment.emailjsPublicKey);
  }

  sendMail(contact: any) {
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
