import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    emailjs.init('cMy0_PkbuBp0cnoB8');
  }

  sendMail(contact: any) {
    const templateParams = {
      name: `${contact.firstname} ${contact.lastname}`,
      email: contact.email,
      ph: contact.ph,
      message: contact.message,
    };

    return emailjs.send('service_3dhhjsb', 'template_7t1j43n', templateParams)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        return response;
      })
      .catch(error => {
        console.error('FAILED...', error);
        throw error;
      });
    }
}
