import { Species } from '../value-objects/species.value';
import { Owner } from './owner.entity';

export class Pet {
  constructor(
    private _name: string,
    private _species: Species,
    private _owner: Owner,
    private _breed: string,
    private _birthdate: Date,
  ) {}

  get name(): string {
    return this._name;
  }
  get species(): Species {
    return this._species;
  }
  get owner(): Owner {
    return this._owner;
  }
  get breed(): string {
    return this._breed;
  }
  get birthdate(): Date {
    return this._birthdate;
  }
}
