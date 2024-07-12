import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentFrontOfficeComponent } from './department-front-office.component';

describe('DepartmentFrontOfficeComponent', () => {
  let component: DepartmentFrontOfficeComponent;
  let fixture: ComponentFixture<DepartmentFrontOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentFrontOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentFrontOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
