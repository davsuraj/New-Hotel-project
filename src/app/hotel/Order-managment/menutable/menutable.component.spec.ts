import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutableComponent } from './menutable.component';

describe('MenutableComponent', () => {
  let component: MenutableComponent;
  let fixture: ComponentFixture<MenutableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenutableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
