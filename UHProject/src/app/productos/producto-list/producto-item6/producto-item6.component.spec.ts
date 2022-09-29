import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoItem6Component } from './producto-item6.component';

describe('ProductoItem6Component', () => {
  let component: ProductoItem6Component;
  let fixture: ComponentFixture<ProductoItem6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoItem6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoItem6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
