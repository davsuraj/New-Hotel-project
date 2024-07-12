import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitingmanagmentComponent } from './sitingmanagment.component';

describe('SitingmanagmentComponent', () => {
  let component: SitingmanagmentComponent;
  let fixture: ComponentFixture<SitingmanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitingmanagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitingmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
