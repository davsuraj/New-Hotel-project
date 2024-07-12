import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPhotoSignatureComponent } from './registration-photo-signature.component';

describe('RegistrationPhotoSignatureComponent', () => {
  let component: RegistrationPhotoSignatureComponent;
  let fixture: ComponentFixture<RegistrationPhotoSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPhotoSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPhotoSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
