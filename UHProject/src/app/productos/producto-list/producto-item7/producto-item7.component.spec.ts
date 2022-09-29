import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoItem7Component } from './producto-item7.component';

describe('ProductoItem7Component', () => {
  let component: ProductoItem7Component;
  let fixture: ComponentFixture<ProductoItem7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoItem7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoItem7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
