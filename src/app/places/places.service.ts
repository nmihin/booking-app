import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line: variable-name
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of NY City',
      'https://i.pinimg.com/originals/41/dd/c5/41ddc5db82c7ee847ce64a3ccfe04f2f.jpg',
      150.99
    ),
    new Place(
      'p2',
      'Paris Mansion',
      'In the heart of Paris City',
      'https://www.greenpearls.com/wp-content/uploads/2018/08/environmental-protection-green-travel.jpeg',
      190.99
    ),
    new Place(
      'p3',
      'Roma Italiana',
      'In the heart of Rome City',
      'https://sofitel.accor.com/destinations/imagerie/roma-overview-1400x788-1-c962_1400x788.jpg',
      130.99
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
