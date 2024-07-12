import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../hotel-service/hotel.service';
// import { error } from '@angular/compiler/src/util';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-tablereport',
  templateUrl: './tablereport.component.html',
  styleUrls: ['./tablereport.component.scss']
})
export class TablereportComponent implements OnInit {

  constructor(
    private service: HotelService
  ) { }

  ngOnInit(): void {
  }
  handleReport(){
    this.service.getRequest('url').subscribe(
      (res)=>{
        console.log(res);
        // Handle response here
      },
      (error) => {
        console.error('Error occurred:', error);
        // Handle error here
      }
    )
  }

}
