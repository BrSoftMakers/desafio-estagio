export class Species {
  private validSpecies = ['dog', 'cat'];
  constructor(private _value: string) {
    if (!this.isValid(_value)) {
      throw new Error(`The species ${_value} is invalid`);
    }
  }

  get value(): string {
    return this._value;
  }

  private isValid(value: string): boolean {
    return this.validSpecies.includes(value);
  }
}
