import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAllowTableComponent } from './inventory-allow-table.component';

describe('InventoryAllowTableComponent', () => {
  let component: InventoryAllowTableComponent;
  let fixture: ComponentFixture<InventoryAllowTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAllowTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAllowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
