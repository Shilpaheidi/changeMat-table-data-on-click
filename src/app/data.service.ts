import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { PeriodicElement, Data, ELEMENT_DATA, thirdDATA } from './data'; // Make sure to adjust the import paths
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getData(): Observable<PeriodicElement[]> {
    // You can fetch data from an API or return a predefined dataset like Data or ELEMENT_DATA
    // For now, let's return the predefined dataset
    return of(Data);
  }

  getElementData(): Observable<PeriodicElement[]> {
    return of(ELEMENT_DATA);
  }


  getthirdData():Observable<PeriodicElement[]>{

    return of(thirdDATA)
  }

  }

