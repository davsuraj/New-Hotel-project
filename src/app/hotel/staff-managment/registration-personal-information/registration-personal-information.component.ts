import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../hotel-service/hotel.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-personal-information',
  templateUrl: './registration-personal-information.component.html',
  styleUrls: ['./registration-personal-information.component.scss']
})
export class RegistrationPersonalInformationComponent implements OnInit {
 addregistration:any =FormGroup;
  constructor(private hotelservice :HotelService,
    private fb:FormBuilder)
     { }

  ngOnInit(): void {
    this.addregistration= this.fb.group({
      full_name:[''],
      father_name:[''],
      gender:[''],
      addher_number:[''],
      pan_card:[''],
      mother_name:[''],
      email_id:[''],
      mobail_number:[''],
      working_experience:[''],
      full_address:['']

    })
  }


handleaddregistration(){
  console.log(this.addregistration.value);
}
}


