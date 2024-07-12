import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SttafmanagmentComponent } from './sttafmanagment.component';

describe('SttafmanagmentComponent', () => {
  let component: SttafmanagmentComponent;
  let fixture: ComponentFixture<SttafmanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SttafmanagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SttafmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
