import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPictureComponent } from './order-picture.component';

describe('OrderPictureComponent', () => {
  let component: OrderPictureComponent;
  let fixture: ComponentFixture<OrderPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
