import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SttafPictureComponent } from './sttaf-picture.component';

describe('SttafPictureComponent', () => {
  let component: SttafPictureComponent;
  let fixture: ComponentFixture<SttafPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SttafPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SttafPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
