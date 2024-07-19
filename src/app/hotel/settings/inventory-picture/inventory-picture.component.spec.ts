import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryPictureComponent } from './inventory-picture.component';

describe('InventoryPictureComponent', () => {
  let component: InventoryPictureComponent;
  let fixture: ComponentFixture<InventoryPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
