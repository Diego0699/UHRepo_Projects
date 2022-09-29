import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoItem4Component } from './producto-item4.component';

describe('ProductoItem4Component', () => {
  let component: ProductoItem4Component;
  let fixture: ComponentFixture<ProductoItem4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoItem4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoItem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
