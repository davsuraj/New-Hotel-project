import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderfoodreportComponent } from './orderfoodreport.component';

describe('OrderfoodreportComponent', () => {
  let component: OrderfoodreportComponent;
  let fixture: ComponentFixture<OrderfoodreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderfoodreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderfoodreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
