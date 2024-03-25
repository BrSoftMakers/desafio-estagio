export class OutputBoundary {
  constructor(
    private _id: number,
    private _name: string,
    private _species: string,
    private _ownerName: string,
    private _ownerPhone: string,
    private _breed: string,
    private _birthdate: string,
  ) {}

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get species(): string {
    return this._species;
  }

  get ownerName(): string {
    return this._ownerName;
  }

  get ownerPhone(): string {
    return this._ownerPhone;
  }

  get breed(): string {
    return this._breed;
  }

  get birthdate(): string {
    return this._birthdate;
  }
}
