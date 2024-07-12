import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedtableComponent } from './bookedtable.component';

describe('BookedtableComponent', () => {
  let component: BookedtableComponent;
  let fixture: ComponentFixture<BookedtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
