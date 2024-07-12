import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDocumentDetailComponent } from './registration-document-detail.component';

describe('RegistrationDocumentDetailComponent', () => {
  let component: RegistrationDocumentDetailComponent;
  let fixture: ComponentFixture<RegistrationDocumentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationDocumentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDocumentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
