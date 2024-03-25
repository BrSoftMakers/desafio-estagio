export class Phone {
  validPhoneRegex = /^\(\d{2}\)\s9\s\d{4}-\d{4}$/;
  constructor(private _value: string) {
    if (!this.isValid(_value)) {
      throw new Error(`The phone number ${_value} is invalid`);
    }
  }

  isValid(value: string): boolean {
    return this.validPhoneRegex.test(value);
  }
  get value(): string {
    return this._value;
  }
}
