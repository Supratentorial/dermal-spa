import {ContactPoint} from './contact-point';

export class Patient {
  id: number;
  title: string;
  givenNames: string;
  familyName: string;
  birthDate: Date;
  age: string;
  active: boolean;
  gender: string;
  mobilePhone: ContactPoint;
  email: ContactPoint;
}
