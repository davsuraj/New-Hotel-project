import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HotelService } from '../../hotel-service/hotel.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.scss']
})
export class BooktableComponent implements OnInit {
formcontrol = new FormControl('',[
Validators.required,
Validators.email
]);
booktable:any =FormGroup;
  constructor(private hotelservice :HotelService,
    private fb:FormBuilder)
     { }

  ngOnInit(): void {
    this.booktable= this.fb.group({
      Coustumer_Name:[''],
      Email_Id:[''],
      Choose_a_date:[''],
      Time:[''],
      Mobile_Number:[''],
      Aadhar_Number:[''],
      No_of_pepole:[''],
      Pay_Mode:[''],

    })
  }


handlebooktable(){
  console.log(this.booktable.value);
}
}

