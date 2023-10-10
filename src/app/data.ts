

export const Data: PeriodicElement[] = [
    {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 110, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  
  export const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];


  export const thirdDATA: PeriodicElement[] = [
    {position: 31, name: 'shilps', weight: 1.0079, symbol: 'S'},
    {position: 32, name: 'shilps', weight: 4.0026, symbol: 'He'},
    {position: 33, name: 'shilps', weight: 6.941, symbol: 'Li'},
    {position: 34, name: 'shilps', weight: 9.0122, symbol: 'Be'},
    {position: 35, name: 'shilps', weight: 10.811, symbol: 'B'},
    {position: 36, name: 'shilps', weight: 12.0107, symbol: 'C'},
    {position: 37, name: 'shilps', weight: 14.0067, symbol: 'N'},
    {position: 38, name: 'shilps', weight: 15.9994, symbol: 'O'},
    {position: 39, name: 'shilps', weight: 18.9984, symbol: 'F'},
    {position: 40, name: 'shilps', weight: 20.1797, symbol: 'Ne'},
  ];

  export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }