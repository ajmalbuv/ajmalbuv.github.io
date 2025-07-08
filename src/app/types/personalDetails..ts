export interface ContactDetail {
  id?: string;
  number?: string;
  url?: string;
  img: string;
}

export interface Contact {
  email: ContactDetail;
  phone: ContactDetail;
  address: string;
  github: ContactDetail;
  linkedin: ContactDetail;
  instagram: ContactDetail;
}

export interface PersonalDetails {
  name: string;
  img: string;
  resume: string;
  designation: string[];
  description: string;
  contact: Contact;
}
