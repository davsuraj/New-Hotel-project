import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAllowProductComponent } from './inventory-allow-product.component';

describe('InventoryAllowProductComponent', () => {
  let component: InventoryAllowProductComponent;
  let fixture: ComponentFixture<InventoryAllowProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAllowProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAllowProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
