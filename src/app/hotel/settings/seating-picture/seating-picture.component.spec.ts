import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatingPictureComponent } from './seating-picture.component';

describe('SeatingPictureComponent', () => {
  let component: SeatingPictureComponent;
  let fixture: ComponentFixture<SeatingPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatingPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatingPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
