import { Phone } from '../value-objects/phone.value';

export class Owner {
  constructor(
    private _name: string,
    private _phone: Phone,
  ) {}

  get name(): string {
    return this._name;
  }
  get phone(): Phone {
    return this._phone;
  }
}
