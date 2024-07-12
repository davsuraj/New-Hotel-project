
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../hotel-service/hotel.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-photo-signature',
  templateUrl: './registration-photo-signature.component.html',
  styleUrls: ['./registration-photo-signature.component.scss']
})
export class RegistrationPhotoSignatureComponent implements OnInit {
  add_photo_sing :any=FormGroup
  constructor(private hotelservice :HotelService,
    private fb:FormBuilder) { }

    ngOnInit(): void {
      this.  add_photo_sing = this.fb.group({
        photo:[''],
        signature:[''],
      })
    }
  
  
  handleaddregistration_detail(){
    console.log(this.add_photo_sing.value);
  }
  }
  


