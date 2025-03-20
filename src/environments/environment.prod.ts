export const environment = {
  production: true,
  emailjsPublicKey: process.env['EMAILJS_PUBLIC_KEY'] || '',
  emailjsServiceId: process.env['EMAILJS_SERVICE_ID'] || '',
  emailjsTemplateId: process.env['EMAILJS_TEMPLATE_ID'] || '',
};
