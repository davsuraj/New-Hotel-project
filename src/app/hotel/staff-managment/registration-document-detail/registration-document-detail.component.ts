import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../hotel-service/hotel.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-document-detail',
  templateUrl: './registration-document-detail.component.html',
  styleUrls: ['./registration-document-detail.component.scss']
})
export class RegistrationDocumentDetailComponent implements OnInit {
 add_registration_document :any=FormGroup
  constructor(private hotelservice :HotelService,
    private fb:FormBuilder) { }

    ngOnInit(): void {
      this. add_registration_document= this.fb.group({
        addher:[''],
        pan_card:[''],
        experience_certificate:[''],
        Marksheet_ten:[''],
        Marksheet_twelve:[''],
        Degree_certificate:[''],
      })
    }
  
  
  handleaddregistration_detail(){
    console.log(this.add_registration_document.value);
  }
  }
  