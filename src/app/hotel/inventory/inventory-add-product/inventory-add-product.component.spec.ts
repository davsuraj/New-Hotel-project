import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddProductComponent } from './inventory-add-product.component';

describe('InventoryAddProductComponent', () => {
  let component: InventoryAddProductComponent;
  let fixture: ComponentFixture<InventoryAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
