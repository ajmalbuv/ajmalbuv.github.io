import type { ImageMetadata } from 'astro';

interface IconDetail {
  id?: string;
  number?: string;
  url?: string;
  icon: string;
}

export interface Contact {
  email: IconDetail;
  phone: IconDetail;
  address: string;
  github: IconDetail;
  linkedin: IconDetail;
  instagram: IconDetail;
}

export interface PersonalDetails {
  name: string;
  img: string | ImageMetadata;
  resume: string;
  designation: string[];
  description: string;
  contact: Contact;
}
