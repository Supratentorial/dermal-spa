import {ContactPoint} from './contact-point';
import {Address} from './address';
import {Condition} from './condition';

export class Patient {
  id: number;
  title: string;
  givenNames: string;
  familyName: string;
  birthDate: Date;
  age: string;
  active: boolean;
  gender: string;
  mobilePhone?: ContactPoint;
  email?: ContactPoint;
  residentialAddress: Address;
  postalAddress: Address;
  conditions: Condition[];
}
