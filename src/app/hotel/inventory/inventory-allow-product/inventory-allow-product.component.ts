import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../hotel-service/hotel.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inventory-allow-product',
  templateUrl: './inventory-allow-product.component.html',
  styleUrls: ['./inventory-allow-product.component.scss']
})
export class InventoryAllowProductComponent implements OnInit {

  allowproduct:any =FormGroup;
  constructor(private hotelservice :HotelService,
    private fb:FormBuilder)
     { }

  ngOnInit(): void {
    this.allowproduct= this.fb.group({
      Product_Name:[''],
      Department:[''],
      Choose_a_date:[''],
      Time:[''],
      Quntity:[''],
      Allow_Staff:[''],
      Product_Receive:['']
     

    })
  }


handleallowproduct(){
  console.log(this.allowproduct.value);
}
}





