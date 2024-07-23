import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDepartmentComponent } from './security-department.component';

describe('SecurityDepartmentComponent', () => {
  let component: SecurityDepartmentComponent;
  let fixture: ComponentFixture<SecurityDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
