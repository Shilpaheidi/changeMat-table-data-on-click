import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from './data.service';
import { PeriodicElement } from './data';
/** Constants used to fill up our data base. */



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>([]); // Initialize with an empty array

  constructor(private dataService: DataService) {}

  callData() {
    this.dataService.getData().subscribe((data) => {
      this.dataSource.data = data; // Update the MatTableDataSource with the fetched data
    });
  }

  callElementData() {
    this.dataService.getElementData().subscribe((elementData) => {
      this.dataSource.data = elementData;
    });
  }


  callThirdData(){
    this.dataService.getthirdData().subscribe((res) => {
    this.dataSource.data = res;
    });
  }
}
