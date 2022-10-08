import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDrownListComponent } from './product-drown-list.component';

describe('ProductDrownListComponent', () => {
  let component: ProductDrownListComponent;
  let fixture: ComponentFixture<ProductDrownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDrownListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDrownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
