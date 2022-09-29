import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoItem3Component } from './producto-item3.component';

describe('ProductoItem3Component', () => {
  let component: ProductoItem3Component;
  let fixture: ComponentFixture<ProductoItem3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoItem3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
