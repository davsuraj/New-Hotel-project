import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { HotelService } from '../../hotel-service/hotel.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inventory-add-product',
  templateUrl: './inventory-add-product.component.html',
  styleUrls: ['./inventory-add-product.component.scss']
})
export class InventoryAddProductComponent implements OnInit {
  formcontrol = new FormControl('',[
    Validators.required,
    Validators.email
    ]);
    addproduct:any =FormGroup;
    constructor(private hotelservice :HotelService,
      private fb:FormBuilder)
       { }
  
    ngOnInit(): void {
      this.addproduct= this.fb.group({
        Product_Name:[''],
        Department:[''],
        Price:[''],
        Quntity:[''],
        Choose_a_date:[''],
        Time:[''],
       
  
      })
    }
  
  
  handleaddproduct(){
    console.log(this.addproduct.value);
  }
  }
  
  


