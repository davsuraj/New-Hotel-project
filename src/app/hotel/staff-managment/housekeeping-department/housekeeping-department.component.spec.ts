import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeepingDepartmentComponent } from './housekeeping-department.component';

describe('HousekeepingDepartmentComponent', () => {
  let component: HousekeepingDepartmentComponent;
  let fixture: ComponentFixture<HousekeepingDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeepingDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeepingDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
