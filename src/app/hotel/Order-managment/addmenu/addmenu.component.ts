import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../hotel-service/hotel.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddmenuComponent implements OnInit {
  addmenuForm:any =FormGroup;

  constructor(
    private hotelService: HotelService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.addmenuForm= this.fb.group({
      Food_Name:[''],
      Food_Category:[''],
      Food_Type:[''],
      Half_Price:[''],
      Full_Price:['']

    })

  }

  handleAddmenu(){
    console.log(this.addmenuForm.value);
  }

}
