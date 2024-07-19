import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPictureComponent } from './booking-picture.component';

describe('BookingPictureComponent', () => {
  let component: BookingPictureComponent;
  let fixture: ComponentFixture<BookingPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
