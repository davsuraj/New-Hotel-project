import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../hotel-service/hotel.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addtable',
  templateUrl: './addtable.component.html',
  styleUrls: ['./addtable.component.scss']
})
export class AddtableComponent implements OnInit {

  addTableForm:any =FormGroup;

  constructor(
    private hotelService: HotelService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addTableForm= this.fb.group({
      table_name:[''],
      floor_name:[''],
      table_capacity:[''],
      floor_code:['']

    })
  }

  handleAddTable(){
    console.log(this.addTableForm.value);
    
  }

}
