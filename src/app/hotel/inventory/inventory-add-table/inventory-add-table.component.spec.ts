import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddTableComponent } from './inventory-add-table.component';

describe('InventoryAddTableComponent', () => {
  let component: InventoryAddTableComponent;
  let fixture: ComponentFixture<InventoryAddTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAddTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAddTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
